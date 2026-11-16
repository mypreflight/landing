import { execFileSync } from "node:child_process";
import { appendFileSync, existsSync, openAsBlob, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { setTimeout as sleep } from "node:timers/promises";

const ROOT = "discord";
const SITE = "https://mypreflight.io";
const RELEASE_REPOS = { app: "mypreflight/app", transponder: "mypreflight/transponder-app" };
const MAX_CONTENT = 2000;
const MAX_IMAGES = 10;
const MAX_IMAGE_BYTES = 10 * 1024 * 1024;
const FOLDER = /^\d{4}-\d{2}-\d{2}-[a-z0-9]+(-[a-z0-9]+)*$/;
const IMAGE = /^\d{2}-[a-z0-9]+(-[a-z0-9]+)*\.(png|jpe?g|webp|gif)$/;
const VERSION = /^\d+\.\d+\.\d+$/;
const SUPPRESS_EMBEDS = 1 << 2;
const IMAGE_TYPES = { png: "image/png", jpg: "image/jpeg", jpeg: "image/jpeg", webp: "image/webp", gif: "image/gif" };

const tagOf = (folder) => `discord/${folder}`;

const git = (...args) => execFileSync("git", args, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();

const folders = () =>
  existsSync(ROOT)
    ? readdirSync(ROOT, { withFileTypes: true })
        .filter((entry) => entry.isDirectory())
        .map((entry) => entry.name)
        .sort()
    : [];

const postedTags = () => {
  const tags = new Map();
  for (const line of git("ls-remote", "--tags", "origin").split("\n")) {
    const [sha, ref] = line.split("\t");
    if (ref?.startsWith("refs/tags/discord/") && !ref.endsWith("^{}")) {
      tags.set(ref.slice("refs/tags/discord/".length), sha);
    }
  }
  return tags;
};

const frontmatter = (text) => {
  const match = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/.exec(text);
  if (!match) return null;
  const data = {};
  for (const line of match[1].split("\n")) {
    const field = /^([a-z]+):\s*(.*?)\s*$/.exec(line);
    if (field) data[field[1]] = field[2].replace(/^(["'])(.*)\1$/, "$2");
  }
  return { data, body: match[2].trim() };
};

const changelogHasVersion = (product, version) => {
  const base = join("src/content/changelog", product);
  if (!existsSync(base)) return false;
  return readdirSync(base).some((entry) => {
    const file = join(base, entry, "index.md");
    if (!existsSync(file)) return false;
    const found = /^version:\s*["']?([^"'\s]+)["']?\s*$/m.exec(readFileSync(file, "utf8"));
    return found?.[1] === version;
  });
};

const load = (folder) => {
  const dir = join(ROOT, folder);
  const errors = [];
  if (!FOLDER.test(folder)) errors.push("Name the folder YYYY-MM-DD-<slug>, in lowercase.");

  const postFile = join(dir, "post.md");
  if (!existsSync(postFile)) return { folder, errors: [...errors, "post.md is missing."] };

  const parsed = frontmatter(readFileSync(postFile, "utf8"));
  if (!parsed) return { folder, errors: [...errors, "post.md needs a frontmatter block between --- lines."] };

  const { changelog, version } = parsed.data;
  if (!(changelog in RELEASE_REPOS)) errors.push(`changelog must be one of: ${Object.keys(RELEASE_REPOS).join(", ")}.`);
  if (!VERSION.test(version ?? "")) errors.push("version must look like 2.132.0.");
  else if (changelog in RELEASE_REPOS && !changelogHasVersion(changelog, version)) {
    errors.push(`No ${changelog} changelog entry has version ${version}.`);
  }
  if (!parsed.body) errors.push("The post has no text.");
  if (parsed.body.includes("—")) errors.push("No em dashes: use a colon, a comma or a full stop.");

  const link = `${SITE}/changelog/${changelog}/?version=${version}`;
  const content = `${parsed.body}\n\nFull changelog: ${link}`;
  if (content.length > MAX_CONTENT) {
    errors.push(`The post is ${content.length} characters with the changelog link; Discord allows ${MAX_CONTENT}.`);
  }

  const images = [];
  for (const name of readdirSync(dir).sort()) {
    if (name === "post.md") continue;
    if (!IMAGE.test(name)) {
      errors.push(`${name}: only numbered images belong here, named like 01-briefing-by-phase.png.`);
      continue;
    }
    const size = statSync(join(dir, name)).size;
    if (size > MAX_IMAGE_BYTES) errors.push(`${name} is ${(size / 1048576).toFixed(1)} MB; Discord allows 10 MB.`);
    images.push(name);
  }
  if (images.length > MAX_IMAGES) errors.push(`${images.length} images; Discord allows ${MAX_IMAGES} per message.`);

  return { folder, dir, changelog, version, content, images, errors };
};

const summary = (text) => {
  if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, `${text}\n`);
};

const preview = (post, status) => {
  summary(`### ${post.folder} (${status})\n`);
  summary(post.content.replace(/^/gm, "> "));
  summary(`\n${post.images.map((name) => `- ${name}`).join("\n") || "No images."}\n`);
};

const check = () => {
  let tags = new Map();
  try {
    tags = postedTags();
  } catch {
    console.warn("Could not list the posted tags; skipping the already-posted check.");
  }

  let failed = false;
  for (const folder of folders()) {
    const post = load(folder);
    const posted = tags.get(folder);
    if (posted) {
      try {
        git("diff", "--quiet", posted, "HEAD", "--", join(ROOT, folder));
      } catch (error) {
        if (error.status === 1) {
          post.errors.push(`Already posted to Discord (tag ${tagOf(folder)}); edits here never reach it.`);
        }
      }
    }
    if (post.errors.length) {
      failed = true;
      console.error(`${folder}:\n${post.errors.map((error) => `  - ${error}`).join("\n")}`);
      continue;
    }
    console.log(
      `${folder}: ${posted ? "posted" : "ready"}, ${post.images.length} images, ${post.content.length} characters`,
    );
    if (!posted) preview(post, "posts after merge");
  }
  return failed ? 1 : 0;
};

const releaseExists = (post) => {
  try {
    execFileSync("gh", ["release", "view", post.version, "--repo", RELEASE_REPOS[post.changelog]], { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
};

const send = async (webhook, post) => {
  const url = new URL(webhook);
  url.searchParams.set("wait", "true");

  for (let attempt = 1; ; attempt++) {
    const form = new FormData();
    form.set(
      "payload_json",
      JSON.stringify({
        content: post.content,
        flags: SUPPRESS_EMBEDS,
        allowed_mentions: { parse: [] },
        attachments: post.images.map((filename, id) => ({ id, filename })),
      }),
    );
    for (const [id, name] of post.images.entries()) {
      const type = IMAGE_TYPES[name.split(".").pop()];
      form.set(`files[${id}]`, await openAsBlob(join(post.dir, name), { type }), name);
    }

    const response = await fetch(url, { method: "POST", body: form });
    if (response.ok) return (await response.json()).id;

    const detail = await response.text();
    if (response.status === 429 && attempt < 4) {
      const wait = Number(JSON.parse(detail).retry_after ?? 1);
      await sleep(Math.ceil(wait * 1000));
      continue;
    }
    throw new Error(`Discord answered ${response.status}: ${detail}`);
  }
};

const webhookReachable = async (webhook) => {
  if (!webhook) {
    console.error("DISCORD_RELEASES_WEBHOOK_URL is not set.");
    return false;
  }
  const response = await fetch(webhook);
  if (!response.ok) {
    console.error(`The webhook answered ${response.status}; check DISCORD_RELEASES_WEBHOOK_URL.`);
    return false;
  }
  const { name, channel_id: channel } = await response.json();
  console.log(`Webhook "${name}" posts to channel ${channel}.`);
  return true;
};

const post = async (dryRun) => {
  const webhook = process.env.DISCORD_RELEASES_WEBHOOK_URL;
  if (!dryRun && !(await webhookReachable(webhook))) return 1;

  const tags = postedTags();
  const pending = folders().filter((folder) => !tags.has(folder));
  if (!pending.length) {
    console.log("Nothing new to post.");
    return 0;
  }

  let failed = false;
  for (const folder of pending) {
    const announcement = load(folder);
    if (announcement.errors.length) {
      failed = true;
      console.error(`${folder} not posted:\n${announcement.errors.map((error) => `  - ${error}`).join("\n")}`);
      continue;
    }
    if (!releaseExists(announcement)) {
      failed = true;
      console.error(
        `${folder} not posted: ${RELEASE_REPOS[announcement.changelog]} has no release ${announcement.version} yet.`,
      );
      continue;
    }
    if (dryRun) {
      console.log(`${folder} would post ${announcement.images.length} images:\n\n${announcement.content}\n`);
      continue;
    }

    const tag = `refs/tags/${tagOf(folder)}`;
    git("push", "origin", `HEAD:${tag}`);
    try {
      const id = await send(webhook, announcement);
      console.log(`${folder} posted as Discord message ${id}.`);
      summary(`Posted ${folder} as Discord message ${id}.`);
    } catch (error) {
      failed = true;
      console.error(`${folder} not posted: ${error.message}`);
      git("push", "origin", `:${tag}`);
    }
  }
  return failed ? 1 : 0;
};

const [command, flag] = process.argv.slice(2);
if (command === "check") process.exit(check());
else if (command === "post") process.exit(await post(flag === "--dry-run"));
else {
  console.error("Usage: node scripts/discord.mjs check | post [--dry-run]");
  process.exit(2);
}

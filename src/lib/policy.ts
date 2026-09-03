export type PolicyBlock =
  | { kind: "paragraph"; text: string }
  | { kind: "lines"; lines: string[] }
  | { kind: "list"; items: string[] }
  | { kind: "table"; head: string[]; rows: string[][] };

export interface PolicySection {
  number: string;
  title: string;
  blocks: PolicyBlock[];
}

export interface Policy {
  sections: PolicySection[];
}

import frames from "../data/transponder-console.json";

export type ConsoleRun = [string] | [string, string];

export interface ConsoleFrame {
  version: string;
  columns: number;
  rows: ConsoleRun[][];
}

export interface ConsoleBox {
  key: string;
  row: number;
  column: number;
  width: number;
  height: number;
}

export const CONSOLE_FRAMES = frames as unknown as Record<"dashboard" | "signIn", ConsoleFrame>;

const rowText = (row: ConsoleRun[]): string => row.map(([text]) => text).join("");

export const consoleBoxes = (frame: ConsoleFrame): ConsoleBox[] => {
  const lines = frame.rows.map(rowText);
  return lines.flatMap((line, row) =>
    [...line.matchAll(/╭─ (\d) /g)].map((match) => {
      const column = match.index ?? 0;
      const right = line.indexOf("╮", column);
      const bottom = lines.findIndex((candidate, index) => index > row && candidate[column] === "╰");
      return { key: match[1], row, column, width: right - column + 1, height: bottom - row + 1 };
    }),
  );
};

const sliceRun = ([text, style]: ConsoleRun, from: number, to: number): ConsoleRun | null => {
  const part = text.slice(Math.max(from, 0), Math.max(to, 0));
  if (part === "") return null;
  return style ? [part, style] : [part];
};

export const cropFrame = (frame: ConsoleFrame, box: ConsoleBox): ConsoleFrame => ({
  ...frame,
  columns: box.width,
  rows: frame.rows.slice(box.row, box.row + box.height).map((row) => {
    let start = 0;
    return row.flatMap((run) => {
      const end = start + run[0].length;
      const part = sliceRun(run, box.column - start, box.column + box.width - start);
      start = end;
      return part ? [part] : [];
    });
  }),
});

export const trimFrame = (frame: ConsoleFrame): ConsoleFrame => ({
  ...frame,
  columns: Math.max(...frame.rows.map((row) => rowText(row).trimEnd().length)),
});

export const boxOf = (frame: ConsoleFrame, key: string): ConsoleBox => {
  const box = consoleBoxes(frame).find((candidate) => candidate.key === key);
  if (!box) throw new Error(`The console frame has no box ${key}.`);
  return box;
};

export const bandOf = (frame: ConsoleFrame, key: string): ConsoleBox => ({
  ...boxOf(frame, key),
  column: 0,
  width: frame.columns,
});

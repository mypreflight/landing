export const parseVersion = (value: string): number[] | null => {
  const parts = value.trim().replace(/^v/, "").split(".");
  if (parts.length !== 3 || parts.some((part) => !/^\d+$/.test(part))) return null;
  return parts.map(Number);
};

export const compareVersions = (a: string, b: string): number => {
  const left = parseVersion(a) ?? [0, 0, 0];
  const right = parseVersion(b) ?? [0, 0, 0];
  return left[0] - right[0] || left[1] - right[1] || left[2] - right[2];
};

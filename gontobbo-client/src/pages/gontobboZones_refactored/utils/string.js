export const normalizeString = (input = "") =>
  String(input)
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .trim();

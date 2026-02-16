export function cleanString(value: string) {
  return value ? value?.trimStart().toLowerCase() : "";
}

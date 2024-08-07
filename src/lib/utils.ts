export function createSearchParams(
  obj: {
    [key: string]: string | null | undefined;
  },
  showSymbol?: boolean
): string {
  const params = Object.entries(obj)
    .filter(([key, value]) => value !== null && value !== undefined)
    .map(([key, val]) => `${key}=${encodeURIComponent(val as string)}`)
    .join("&");

  return params ? (showSymbol ? "?" : "") + params : "";
}

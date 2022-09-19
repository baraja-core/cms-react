export const hash = (haystack: string) => {
  let hash = 0;
  let i;
  let chr;
  if (haystack.length === 0) return hash;
  for (i = 0; i < haystack.length; i++) {
    chr = haystack.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }
  return hash;
};

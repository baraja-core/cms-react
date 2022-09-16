const escapeString = (haystack: string) =>
  encodeURIComponent(haystack)
    .replace(/[!'()*]/g, escape)
    .replace(/%20/g, '+');

export default escapeString;

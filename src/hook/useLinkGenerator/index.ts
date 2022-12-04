export const useLinkGenerator = () => {
  const link = (path: string) => `/admin${path ? `/${path}` : ''}`;

  return { link };
};

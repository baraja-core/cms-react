import httpBuildQuery from '../network/httpBuildQuery';

const link = (route: string, params: object = {}) => {
  const formatter = (haystack: string) =>
    (haystack.match(/([A-Z][a-z0-9]*)|(^[a-z]+)/g) as RegExpMatchArray)
      .map((i) => i.toLowerCase())
      .join('-')
      .trim();

  const [pluginPart, viewPart] = `${route}:`.split(':');
  const plugin = formatter(pluginPart ? pluginPart : 'Homepage');
  const view = formatter(viewPart ? viewPart : 'default');

  let path = '/admin/';
  if (plugin === 'homepage') {
    if (view !== 'default') {
      path += 'homepage/' + view;
    }
  } else {
    path += `${plugin}${view !== 'default' ? '/' + view : ''}`;
  }

  let keys = Object.entries(params);
  if (keys.length > 0) {
    path += `?${httpBuildQuery(params)}`;
  }

  return path;
};

export default link;

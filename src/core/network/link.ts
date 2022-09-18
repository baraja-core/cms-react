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

  return `/admin/${
    plugin !== 'homepage'
      ? `${plugin}${view !== 'default' ? `/${view}` : ''}`
      : view !== 'default'
      ? `homepage/${view}`
      : ''
  }${Object.entries(params).length > 0 ? `?${httpBuildQuery(params)}` : ''}`;
};

export default link;

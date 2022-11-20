interface Config {
  apiBaseUrl: string;
  availableLocales: string[];
  defaultLocale: string;
}

const getGlobalConfiguration = (): Config => ({
  apiBaseUrl: 'http://localhost/baraja/nordic-craft.cz/www/',
  availableLocales: ['cs', 'en', 'sk'],
  defaultLocale: 'cs',
});

export default getGlobalConfiguration;

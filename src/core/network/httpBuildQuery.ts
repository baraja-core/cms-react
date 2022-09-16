import isNumeric from '../math/isNumeric';
import escapeString from '../security/escapeString';

const valueSerializer = (value: unknown): string => {
  if (value === undefined || value === null) return '';
  if (value === true) return '1';
  if (value === false) return '0';
  if (value === 0) return '0';

  return String(value ? value : '');
};

const httpBuildQuery = (
  queryData: object,
  numericPrefix: string | undefined | null = undefined,
  argSeparator = '&',
  tempKey: string | undefined | null = undefined
): string =>
  !queryData
    ? ''
    : Object.entries(queryData)
        .map(([k, value]) => {
          const key = tempKey ? `${tempKey}[${k}]` : k;

          return typeof value === 'object' && value
            ? httpBuildQuery(value, null, argSeparator, key)
            : `${escapeString(
                numericPrefix ? (isNumeric(key) ? numericPrefix + Number(key) : key) : key
              )}=${escapeString(valueSerializer(value))}`;
        })
        .filter((item) => item)
        .join(argSeparator)
        .replace(/[!'()*]/g, '');

export default httpBuildQuery;

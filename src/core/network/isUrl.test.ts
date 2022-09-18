import isUrl from './isUrl';

describe('Is URL', () => {
  test('Simple IS URL', () => {
    expect(isUrl('https://baraja.cz')).toEqual(true);
    expect(isUrl('https://php.baraja.cz')).toEqual(true);
    expect(isUrl('http://baraja.cz/')).toEqual(true);
  });
  test('Simple IS NOT URL', () => {
    expect(isUrl('baraja.cz')).toEqual(false);
    expect(isUrl('ftp://php.baraja.cz')).toEqual(false);
    expect(isUrl('abcd')).toEqual(false);
  });
});

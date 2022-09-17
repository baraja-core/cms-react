enum Color {
  dark = 'dark',
  red = 'red',
  orange = 'orange',
  gray = 'gray',
  grayLight = 'grayLight',
  grayDarkBorder = 'grayDarkBorder',
  grayDark = 'grayDark',
  prideRed = 'prideRed',
  prideOrange = 'prideOrange',
  prideYellow = 'prideYellow',
  prideGreen = 'prideGreen',
  prideBlue = 'prideBlue',
  pridePurple = 'pridePurple',
}

type color = {
  [key in Color]: string;
};

interface Palette {
  color: color;
}

const palette: Palette = {
  color: {
    dark: '#1d2125',
    red: '#dc3545',
    orange: '#e95736',
    gray: 'rgba(0, 0, 0, .125)',
    grayLight: '#f8fafb',
    grayDark: '#161b22',
    grayDarkBorder: '#30363e',
    prideRed: '#fd3131',
    prideOrange: '#FF9800',
    prideYellow: '#FFEB3B',
    prideGreen: '#4CAF50',
    prideBlue: '#3F51B5',
    pridePurple: '#9C27B0',
  },
};

export default palette;

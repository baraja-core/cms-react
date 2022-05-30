interface Palette {
  primary: string;
  background: string;
}

interface BrjTheme {
  palette: Palette;
  darkMode: boolean;
}

const theme: BrjTheme = {
  palette: {
    primary: 'black',
    background: '#eee',
  },
  darkMode: false,
};

/*
--bs-blue: #0d6efd;
--bs-indigo: #6610f2;
--bs-purple: #6f42c1;
--bs-pink: #d63384;
--bs-red: #dc3545;
--bs-orange: #fd7e14;
--bs-yellow: #ffc107;
--bs-green: #198754;
--bs-teal: #20c997;
--bs-cyan: #0dcaf0;
--bs-white: #fff;
--bs-gray: #6c757d;
--bs-gray-dark: #343a40;
--bs-primary: #0d6efd;
--bs-secondary: #6c757d;
--bs-success: #198754;
--bs-info: #0dcaf0;
--bs-warning: #ffc107;
--bs-danger: #dc3545;
--bs-light: #f8f9fa;
--bs-dark: #212529;
 */

export default theme;

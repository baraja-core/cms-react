interface Palette {
  primary: string;
  background: string;
}

interface BrjTheme {
  palette: Palette;
}

const theme: BrjTheme = {
  palette: {
    primary: "black",
    background: "#eee",
  },
};

export default theme;

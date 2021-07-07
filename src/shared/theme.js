const device = {
  tablet: `@media screen and (min-width: 768px)`,
  desktop: `@media screen and (min-width: 1024px)`,
};

const colors = {
  white: "#F5F5F5",
  black: "#202020",
  lightGray: "#E0E0E0",
  red: "#eb2f06",
  blue: "#0652DD",
};

const label = {
  darkYellow: "#FB8B24",
  darkRed: "#9A031E",
  darkOrange: "#E36414",
  eagleGreen: "#0F4C5C",
  purple: "#5F0F40",
  sienna: "#E76F51",
  persianGreen: "#2A9D8F",
  rose: "#B56576",
  violet: "#6D597A",
};

const borders = {
  basicBorder: `1px solid ${colors.white}`,
};

const fontSizes = {
  xs: "12px",
  sm: "14px",
  md: "16px",
  lg: "20px",
  xl: "24px",
};

const theme = {
  device,
  colors,
  label,
  borders,
  fontSizes,
};

export default theme;

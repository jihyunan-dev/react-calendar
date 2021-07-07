const device = {
  tablet: `@media screen and (min-width: 768px)`,
  desktop: `@media screen and (min-width: 1024px)`,
};

const colors = {
  white: "#F5F5F5",
  black: "#202020",
  lightGray: "#cccccc",
  red: "#eb2f06",
  blue: "#0652DD",
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
  borders,
  fontSizes,
};

export default theme;

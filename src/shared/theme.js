// 반응형 적용을 위한 device theme
const device = {
  tablet: `@media screen and (min-width: 768px)`,
  desktop: `@media screen and (min-width: 1024px)`,
};

// global color theme
const colors = {
  white: "#F5F5F5",
  black: "#202020",
  lightGray: "#E0E0E0",
  red: "#eb2f06",
  blue: "#0652DD",
};

// 스케줄 색상 theme
const label = {
  brick: "#c8553d",
  darkRed: "#9A031E",
  darkYellow: "#FB8B24",
  darkOrange: "#E36414",
  persianGreen: "#2A9D8F",
  green: "#008000",
  eagleGreen: "#0F4C5C",
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

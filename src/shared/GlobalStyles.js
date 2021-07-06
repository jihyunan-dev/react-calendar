import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset};

  @font-face {
    font-family: 'EliceDigitalBaeum_Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/EliceDigitalBaeum_Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

  * {
    box-sizing: border-box;
    font-family: 'EliceDigitalBaeum_Regular', Arial, Helvetica, sans-serif;
  }

  body {
    font-family: 'EliceDigitalBaeum_Regular', Arial, Helvetica, sans-serif;
  }

  a {
    color: black;
    text-decoration: none;
    
    &:hover {
      color: black;
    }
  }

  button, 
  input,
  textarea {
    background-color: transparent;
    border: none;
    outline: none;
  }

  textarea {
    resize: none;
  }
  

`;

export default GlobalStyles;

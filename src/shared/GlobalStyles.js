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
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.black};
    font-family: 'EliceDigitalBaeum_Regular', Arial, Helvetica, sans-serif;
  }

  a {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    
    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  button, 
  input,
  textarea {
    color: ${({ theme }) => theme.colors.white};
    background-color: transparent;
    border: none;
    outline: none;
  }

  input[type="date"]::-webkit-calendar-picker-indicator {
  color: transparent;
  background: none;
  z-index: 1;
}


  textarea {
    resize: none;
  }

  button {
    padding: 0;
    cursor: pointer;
  }
  

`;

export default GlobalStyles;

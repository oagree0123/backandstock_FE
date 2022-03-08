import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
  --primary-color: #367BF5;
  --secondary-color: #E5EFFF;
  --gray-color: #c4c4c4;
  --font-color: #000;
  --font-header: 24px;
  --font-title: 22px;
  --font-large: 20px;
  --font-main: 18px;
  --font-medium: 16px;
  --font-small: 14px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: var(--font-color);
    font-size: var(--font-medium);
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: 0;
  }
  
  button {
    color: var(--font-color);
    cursor: pointer;  
    background-color: #fff;
  }

  input {
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
`;

export default GlobalStyles;
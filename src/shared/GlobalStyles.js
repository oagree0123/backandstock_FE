import { months } from "moment";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
  --primary-color: #367BF5;
  --secondary-color: #E5EFFF;
  --font-color: #78909C;
  --font-title: 1.53vw; //22px
  --font-main: 1.25vw; //18px
  --font-medium: 1.11vw; //16px
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: var(--font-color);
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
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
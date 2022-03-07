import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
  --primary-color: #367BF5;
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
    color: #78909C;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }
  
  button {
    color: #78909C;
    cursor: pointer;
    background-color: #fff;
  }
`;

export default GlobalStyles;
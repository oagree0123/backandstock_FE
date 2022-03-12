import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
  --primary-color: #0087FF;
  //--primary-color: #37638B;
  --secondary-color: #ECF5FF;
  --gray-color: #c4c4c4;
  --font-color: #000;
  //--font-color: #78909C;

  --font-blue:#0075FF;
  --font-red:#FF0000;
  --font-textclolr:#322F37;

  --font-header: 24px;
  --font-title: 22px;
  --font-large: 20px;
  --font-main: 18px;
  --font-medium: 16px;
  --font-small: 14px;

  --line-header: 1.17;
  --line-title: 1.18;
  --line-large: 1.4;
  --line-main: 1.17;
  --line-medium: 1.187;
  --line-small: 1.14;

  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    letter-spacing: 0;
  }

  body {
    color: var(--font-color);
    font-size: var(--font-medium);
    font-family: 'Noto Sans CJK KR';
    font-weight: 400;
    letter-spacing: 0;

    &::-webkit-scrollbar { 
      width: 5px; 
      background-color: var(--gray-color); 
      border-radius: 10;
    }

    &:-webkit-scrollbar-track { 
      background-color: darkgrey; 
    } 
    
    &::-webkit-scrollbar-thumb { 
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3); 
    }

  }
  
  button {
    font-family: 'Noto Sans CJK KR';
    color: var(--font-color);
    cursor: pointer;  
    background-color: #fff;
  }

  input {
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }

    font-family: 'Noto Sans CJK KR';
  }
`;

export default GlobalStyles;

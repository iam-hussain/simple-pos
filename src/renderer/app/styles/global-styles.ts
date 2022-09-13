import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0px;
    margin: 0px;
    height: 100%;
    width: 100%;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-family: "Poppins", sans-serif;
    line-height: 1;
    overflow-x: hidden;
    overflow-y: auto;
    display: block;
  }
  #__next  {
      position: relative;
      height: 100%;
      width: 100%;
      display: block;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
      font-family: "Poppins", sans-serif;
      margin: 0;
  }
  p {
      font-family: "Poppins", sans-serif;
      margin: 0;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;

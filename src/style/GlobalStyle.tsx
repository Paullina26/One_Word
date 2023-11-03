import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *::after, *::before {
    font-family: 'Josefin Sans', sans-serif;
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    font-size: 1.6rem;
    background-attachment: fixed;
    color: black;
    /* width: 100vw;
    height: 100vh; */
    background-image: radial-gradient(
    circle,
    #a2a0c8,
    #a7a5cc,
    #acabcf,
    #b1b0d3,
    #b6b6d6,
    #bcbcd9,
    #c1c1dc,
    #c7c7df,
    #cecfe3,
    #d6d7e7,
    #dddeeb,
    #e5e6ef
  );
  }

  a, button {
    font-family: 'Josefin Sans', sans-serif;
  }
`;

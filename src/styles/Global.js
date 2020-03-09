import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');
  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
    text-decoration: none;
  }

  html {
    font-size: 99.5%;
  }

  body {
    box-sizing: border-box;
    font-family: 'Merriweather', Lato; 
    padding-top: 5rem; 
    z-index: 2;

  }
`;

export default GlobalStyles;

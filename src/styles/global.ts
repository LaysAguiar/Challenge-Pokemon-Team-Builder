import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    outline: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    -webkit-font-smoothing: antialiased;
  }
  body, input, button, textarea, select {
    font: 800 1rem 'Spartan', sans-serif;
  }
  button {
  cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  #__next {
    min-height: 100vh;
  }
  @media(max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  @media(max-width: 720px) {
    html {
      font-size: 87.50%;
    }
  }
  :root {
    --white: #FFFF;
    --main: #90ADC6;
    --bg: #E5E5E5;
    --blue: #333652;
    --red:#F8635A;
    --green: #8FDA58;
  }


  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    border-radius: 0;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--main);
    border-radius: 0;
  }
  &::-webkit-scrollbar-track {
    border-radius: 0;
    background: var(--main-opacity);
  }
`;


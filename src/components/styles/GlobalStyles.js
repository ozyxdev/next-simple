import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyles = createGlobalStyle`
  
  ${normalize}

  html {
    // CSS VARIABLES
    --max-width: 1000px;
    --nav-drop-shadow: 0px 4px 30px rgba(0, 0, 0, 0.15);
    --shadow-1: 0 3px 6px rgba(0, 0, 0, 0.06), 0 3px 6px rgba(0, 0, 0, 0.13);
    --content-z-index: 1;
    --modal-z-index: 1000;
    --nav-container-z-index: 950;
    --nav-sheet-z-index: 900;
    --color-white: hsla(206, 67%, 99%, 1);
    --color-transparent: rgba(0, 0, 0, 0.05);
    --color-transparent2: rgba(0, 0, 0, 0.1);
    font-size: 8px;
  }

  body {
    font-family: 'Poppins', ---apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 2rem;
    letter-spacing: 0.5px;
    line-height: 2;
    background: var(--color-background);
    color: var(--color-text);
  }

  .container-full-width {
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
  }

  .container {
    max-width: var(--max-width);
    margin: auto 0;
  }

`

export default GlobalStyles

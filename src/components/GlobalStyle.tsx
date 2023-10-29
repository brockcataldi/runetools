import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root{
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: 400;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;

    --osrs-color-background-10: #0f0d09;
    --osrs-color-background-30: #241e16;  
    --osrs-color-background-40: #403527;
    --osrs-color-background-50: #8e7c67;
    --osrs-color-background-70: #d1b88b;
    --osrs-color-text-100: #ffffff;
    --osrs-color-text-90: #fdfc08;
    --osrs-color-text-50: #e1bb34;
    --osrs-color-text-0: #000000;
    --osrs-color-utility-0: #000000;
    --osrs-color-utility-60: #39444b;
    --osrs-color-utility-100: #ffffff;

    --rs3-color-background-30: #010b10;
    --rs3-color-background-50: #071b25;
    --rs3-color-background-70: #16232b;
    --rs3-color-text-100: #ffffff;
    --rs3-color-text-50: #e1bb34;
    --rs3-color-utility-0: #000000;
    --rs3-color-utility-60: #39444b;
    --rs3-color-utility-100: #ffffff;
  }

  body, html{
    margin: 0;
    background-color: white;
  }
`

export default GlobalStyle

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

    --color-background-30: #010b10;
    --color-background-50: #071b25;
    --color-background-70: #16232b;
    --color-text-100: #ffffff;
    --color-text-50: #e1bb34;
    --color-utility-0: #000000;
    --color-utility-60: #39444b;
    --color-utility-100: #ffffff;
  }

  body, html{
    margin: 0;
    background-color: var(--color-background-30);
  }
`

export default GlobalStyle

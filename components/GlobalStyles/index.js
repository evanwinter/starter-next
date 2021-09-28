import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  body {
    min-height: 100vh;
    background-color: #f3f4f5;
    color: #343535;
  }

  html, body {
    margin: 0;
    padding: 0;
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a, button {
    cursor: pointer;
  }

  input {
    font-size: 16px;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`

export default GlobalStyles

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 18px;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
  }

  p {
    margin: 0;
    padding: 0;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
    border: none;
    font-size: 1rem;
    outline: none;
  }

  a {
    cursor: pointer;
  }
`
export default GlobalStyle

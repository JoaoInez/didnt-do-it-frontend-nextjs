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
    text-decoration: none;
  }

  input {
    border: none;
    padding: 10px;
    width: 100%;
    background-color: ${({ theme }) => theme.grey};
    border-radius: 4px;
    transition: box-shadow 0.15s ease-in-out;

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px ${({ theme }) => theme.purple};
    }
  }

  form {
    width: 100%;
  }
`
export default GlobalStyle

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, *:before, *:after  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }  

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    font-weight: 500;
    font-style: normal;
  }

  h1, h2, h4, p, small, legend {
    font-family: 'Poppins', sans-serif;
  }

  h3, button {
    font-family: 'IBM Plex Sans', sans-serif;
  }

  h1 {
    font-size: 68px;
    line-height: 72px;
  }

  h2 {
    font-size: 42px;
    line-height: 48px;
  }

  h3 {
    font-size: 26px;
    line-height: 48px;
  }

  h4 {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }

  small {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }

  legend {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`

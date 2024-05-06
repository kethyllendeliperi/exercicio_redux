import { createGlobalStyle } from 'styled-components'

export const cores = {
  corTexto: '#3c3c3c',
  corFundo: '#000',
  corPrincipal: '#469BD2',
  corSecundaria: '#C9C1E5'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    color: ${cores.corTexto}
  }

  body {
    background-color: #fff;
    padding-bottom: 80px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 1024px) {
      max-width: 80%;
    }
  }
`

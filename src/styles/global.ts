import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        -webkit-font-smoothing: antialiased;
        background: ${(props) => props.theme['gray-600']};
        font-family: 'Roboto', sans-serif;
        overflow-x: hidden;
    }
    *:focus {
        outline: none;
    }
`

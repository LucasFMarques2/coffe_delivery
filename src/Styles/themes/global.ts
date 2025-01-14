import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    
    :root{
        font-size: 62.5%;
    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: none;
        box-shadow: 0 0 0 2px ${({ theme }) => theme['yellow-500']};
    }

    body{
        background: ${({ theme }) => theme['white']} ;
        color: ${({ theme }) => theme['gray-900']} ;
    }

    body, input, button, textarea{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.6rem;
        -webkit-font-smoothing: antialiased;
    }
`
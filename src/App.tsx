import { ThemeProvider } from "styled-components"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./Routes/index.routes"

import { GlobalStyle } from "./Styles/themes/global"
import { defatulTheme } from "./Styles/themes/defatulTheme"

export function App(){
    return(
        <ThemeProvider theme={defatulTheme}>
          <BrowserRouter>
            <Router/>
          </BrowserRouter>
          <GlobalStyle/>
        </ThemeProvider>

    )
}
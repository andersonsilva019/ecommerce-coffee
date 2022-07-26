import { ThemeProvider } from "styled-components"
import { CartContextProvider } from "./contexts/cartContext"
import { RootRoutes } from "./Routes"
import { GlobalStyles } from "./styles/GlobalStyles"
import { defaultTheme } from "./styles/theme/default"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <CartContextProvider>
        <RootRoutes />
      </CartContextProvider>
    </ThemeProvider>
  )
}

export default App

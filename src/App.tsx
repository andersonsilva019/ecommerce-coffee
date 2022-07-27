import { ThemeProvider } from "styled-components"
import { CartContextProvider } from "./contexts/cartContext"
import { FormContextProvider } from "./contexts/formContext"
import { RootRoutes } from "./RootRoutes"
import { GlobalStyles } from "./styles/GlobalStyles"
import { defaultTheme } from "./styles/theme/default"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <FormContextProvider>
        <CartContextProvider>
          <RootRoutes />
        </CartContextProvider>
      </FormContextProvider>
    </ThemeProvider>
  )
}

export default App

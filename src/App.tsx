import { ThemeProvider } from "styled-components"
import { Home } from "./pages/Home"
import { GlobalStyles } from "./styles/GlobalStyles"
import { defaultTheme } from "./styles/theme/default"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  )
}

export default App

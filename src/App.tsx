import { ThemeProvider } from "styled-components"
import { RootRoutes } from "./Routes"
import { GlobalStyles } from "./styles/GlobalStyles"
import { defaultTheme } from "./styles/theme/default"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <RootRoutes />
    </ThemeProvider>
  )
}

export default App

import Home from "./pages/Home"
import MuiProviderTheme from "./theme/MuiThemeProvider"

function App() {

  return (
    <MuiProviderTheme>
      <Home/>
    </MuiProviderTheme>
  )
}

export default App

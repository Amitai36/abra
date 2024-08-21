import { useGetWeather } from "./api/usePlace"
import Map from "./components/Map"
import MuiProviderTheme from "./theme/MuiThemeProvider"

function App() {
  const {data} = useGetWeather()
  console.log(data)
  return (
    <MuiProviderTheme>
      <Map />
    </MuiProviderTheme>
  )
}

export default App

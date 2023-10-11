import { ThemeProvider } from 'styled-components'
import { myTheme, GlobalStyles } from '@/styles'

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyles />
      <h1>Hola mundo</h1>
    </ThemeProvider>
  )
}

export default App

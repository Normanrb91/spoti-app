import { ThemeProvider } from 'styled-components'
import { myTheme, GlobalStyles } from '@/styles'
import { Player } from '@/components'

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyles />
      <Player />
    </ThemeProvider>
  )
}

export default App

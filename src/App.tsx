import { ThemeProvider } from 'styled-components'
import { myTheme, GlobalStyles } from '@/styles'
import { Routes } from '@/router'

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  )
}

export default App

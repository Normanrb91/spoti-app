import { type PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components'
import { Routes } from '@/router'
import { AuthProvider, PlayListProvider } from '@/context'
import { myTheme, GlobalStyles } from '@/styles'

function AppState({ children }: PropsWithChildren) {
  return (
    <AuthProvider>
      <PlayListProvider>{children}</PlayListProvider>
    </AuthProvider>
  )
}

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <AppState>
        <GlobalStyles />
        <Routes />
      </AppState>
    </ThemeProvider>
  )
}

export default App

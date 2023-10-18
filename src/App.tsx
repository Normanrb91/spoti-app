import { type PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components'
import { Routes } from '@/router'
import { AuthProvider, GradientProvider, PlayListProvider } from '@/context'
import { myTheme, GlobalStyles } from '@/styles'

function AppState({ children }: PropsWithChildren) {
  return (
    <AuthProvider>
      <GradientProvider>
        <PlayListProvider>{children}</PlayListProvider>
      </GradientProvider>
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

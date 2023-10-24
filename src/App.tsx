import { type PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components'
import { Routes } from '@/router'
import { AuthProvider, GradientProvider, PlayListProvider, TrackProvider } from '@/context'
import { myTheme, GlobalStyles } from '@/styles'

function AppState({ children }: PropsWithChildren) {
  return (
    <AuthProvider>
      <PlayListProvider>
        <TrackProvider>
          <GradientProvider>{children}</GradientProvider>
        </TrackProvider>
      </PlayListProvider>
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

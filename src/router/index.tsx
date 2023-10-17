import { useEffect, useContext } from 'react'
import { BrowserRouter, Navigate, Route, Routes as BrowserRoutes } from 'react-router-dom'
import { Dashboard } from '@/components'
import { AuthContext } from '@/context'
import { Login } from './login'
import { Home } from './home'
import { Search } from './search'
import { PlayList } from './playlist'

export const Routes = () => {
  const { signIn, token } = useContext(AuthContext)

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const token = hash.substring(1).split('&')[0].split('=')[1]
      signIn(token)
    }
  }, [])

  if (!token) return <Login />

  return (
    <BrowserRouter>
      <BrowserRoutes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/playlist/:id" element={<PlayList />} />
          <Route path="/*" element={<Navigate to={'/'} />} />
        </Route>
      </BrowserRoutes>
    </BrowserRouter>
  )
}

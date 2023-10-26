import { useContext } from 'react'
import { BrowserRouter, Navigate, Route, Routes as BrowserRoutes } from 'react-router-dom'
import { Dashboard } from '@/components'
import { AuthContext } from '@/context'
import { Login } from './login'
import { Home } from './home'
import { Search } from './search'
import { PlayList } from './playlist'

export const Routes = () => {
  const { token } = useContext(AuthContext)

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

import { BrowserRouter, Navigate, Route, Routes as BrowserRoutes } from 'react-router-dom'
import { Home } from './home'
import { Search } from './search'
import { PlayList } from './playlist'
import { Player } from '@/components'

export const Routes = () => {
  return (
    <BrowserRouter>
      <BrowserRoutes>
        <Route path="/" element={<Player />}>
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/playlist/:id" element={<PlayList />} />
          <Route path="/" element={<Navigate to={'/home'} />} />
          <Route path="/*" element={<Navigate to={'/home'} />} />
        </Route>
      </BrowserRoutes>
    </BrowserRouter>
  )
}

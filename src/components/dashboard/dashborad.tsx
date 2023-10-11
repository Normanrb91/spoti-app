import { Outlet } from 'react-router-dom'
import { Container } from './styles'

export const Dashborad = () => {
  return (
    <Container>
      <Outlet />
    </Container>
  )
}

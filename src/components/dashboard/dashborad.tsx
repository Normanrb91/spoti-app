import { Outlet } from 'react-router-dom'
import { Container, Overlay } from './styles'

type DashboardProps = {
  isActive: boolean
  closedSidebar: () => void
}

export const Dashborad = ({ isActive, closedSidebar }: DashboardProps) => {
  return (
    <Container>
      {isActive && (
        <Overlay
          className={isActive ? 'opacity' : undefined}
          onClick={() => {
            closedSidebar()
          }}
        />
      )}
      <Outlet />
    </Container>
  )
}

import { memo, useState, useEffect, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { PlayListContext, TrackContext } from '@/context'
import { Player, Sidebar } from '@/components'
import { HamburguerIcon } from '@/assets'
import { Container, IconContainer, Wraper, Overlay, BodyContainer } from './styles'

const Dashboard = () => {
  const [isActive, isSetActive] = useState(false)
  const { getPLayLists } = useContext(PlayListContext)
  const { currentMusic } = useContext(TrackContext)

  useEffect(() => {
    getPLayLists()
  }, [])

  const closedSidebar = () => {
    isSetActive(false)
    document.body.style.overflow = 'unset'
  }

  const showSidebar = () => {
    isSetActive(true)
    if (typeof window != 'undefined' && window.document) {
      document.body.style.overflow = 'hidden'
    }
  }

  return (
    <Container>
      <Wraper>
        <Sidebar isActive={isActive} closedSidebar={closedSidebar} />

        <IconContainer onClick={() => showSidebar()}>
          <HamburguerIcon />
        </IconContainer>

        <BodyContainer>
          {isActive && (
            <Overlay
              className={isActive ? 'opacity' : undefined}
              onClick={() => {
                closedSidebar()
              }}
            />
          )}
          <Outlet />
        </BodyContainer>
      </Wraper>

      {currentMusic.track && <Player />}
    </Container>
  )
}

const MemoDashboard = memo(Dashboard)

export { MemoDashboard as Dashboard }

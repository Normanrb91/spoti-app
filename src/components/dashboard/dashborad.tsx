import { useState, useEffect, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '@/components'
import { HamburguerIcon } from '@/assets'
import { PlayListContext } from '@/context'
import { Container, IconContainer, Contetnt, Overlay } from './styles'

export const Dashboard = () => {
  const [isActive, isSetActive] = useState(false)
  const { getPLayLists } = useContext(PlayListContext)

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
      <Sidebar isActive={isActive} closedSidebar={closedSidebar} />
      <IconContainer onClick={() => showSidebar()}>
        <HamburguerIcon />
      </IconContainer>
      <Contetnt>
        {isActive && (
          <Overlay
            className={isActive ? 'opacity' : undefined}
            onClick={() => {
              closedSidebar()
            }}
          />
        )}
        <Outlet />
      </Contetnt>
    </Container>
  )
}

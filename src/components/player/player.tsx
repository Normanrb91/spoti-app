import { useState } from 'react'
import { Dashborad, Sidebar } from '@/components'
import { Container, IconContainer } from './styles'
import { HamburguerIcon } from '@/assets'

export const Player = () => {
  const [isActive, isSetActive] = useState(false)

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
      <Dashborad isActive={isActive} closedSidebar={closedSidebar} />
    </Container>
  )
}

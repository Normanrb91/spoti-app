import { memo, useContext } from 'react'
import { PlayListContext } from '@/context'
import { CardSidebar, SidebarItem } from '@/components'
import { HomeIcon, LibraryIcon, SearchIcon } from '@/assets'
import { CardContainer, Container, Library, Menu } from './styles'

type SidebarProps = {
  closedSidebar: () => void
  isActive: boolean
}

const Sidebar = ({ isActive, closedSidebar }: SidebarProps) => {
  const { userPlayList } = useContext(PlayListContext)

  return (
    <Container className={!isActive ? 'inactive' : undefined}>
      <Menu>
        <SidebarItem closedSidebar={closedSidebar} icon={<HomeIcon />} path="home">
          Inicio
        </SidebarItem>
        <SidebarItem closedSidebar={closedSidebar} icon={<SearchIcon />} path="search">
          Buscar
        </SidebarItem>
      </Menu>
      <Library>
        <SidebarItem icon={<LibraryIcon />}>Tus listas</SidebarItem>
        <CardContainer>
          {userPlayList.map(playlist => (
            <CardSidebar {...playlist} key={playlist.id} />
          ))}
        </CardContainer>
      </Library>
    </Container>
  )
}

const MemoSidebar = memo(Sidebar)

export { MemoSidebar as Sidebar }

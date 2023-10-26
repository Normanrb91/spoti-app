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
  const { myPlaylists } = useContext(PlayListContext)

  return (
    <Container className={!isActive ? 'inactive' : undefined}>
      <Menu>
        <SidebarItem closedSidebar={closedSidebar} icon={<HomeIcon />} path="/">
          Inicio
        </SidebarItem>
        <SidebarItem icon={<SearchIcon />}>Buscar</SidebarItem>
      </Menu>
      <Library>
        <SidebarItem icon={<LibraryIcon />}>Tus listas</SidebarItem>
        <CardContainer>
          {myPlaylists.map(playlist => (
            <CardSidebar key={playlist.id} playlist={playlist} closedSidebar={closedSidebar} />
          ))}
        </CardContainer>
      </Library>
    </Container>
  )
}

const MemoSidebar = memo(Sidebar)

export { MemoSidebar as Sidebar }

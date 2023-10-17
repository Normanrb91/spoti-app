import { useContext } from 'react'
import { CardSidebar, SidebarItem } from '@/components'
import { PlayListContext } from '@/context'
import { HomeIcon, LibraryIcon, SearchIcon } from '@/assets'
import { CardContainer, Container, Library, Menu } from './styles'

type SidebarProps = {
  closedSidebar: () => void
  isActive: boolean
}

export const Sidebar = ({ isActive, closedSidebar }: SidebarProps) => {
  const { userPlayList } = useContext(PlayListContext)

  return (
    <Container className={!isActive ? 'inactive' : undefined}>
      <Menu>
        <SidebarItem closedSidebar={closedSidebar} icon={<HomeIcon />} path="home">
          Home
        </SidebarItem>
        <SidebarItem closedSidebar={closedSidebar} icon={<SearchIcon />} path="search">
          Search
        </SidebarItem>
      </Menu>
      <Library>
        <SidebarItem icon={<LibraryIcon />}>Your library</SidebarItem>
        <CardContainer>
          {userPlayList.map(playlist => (
            <CardSidebar {...playlist} key={playlist.id} />
          ))}
        </CardContainer>
      </Library>
    </Container>
  )
}

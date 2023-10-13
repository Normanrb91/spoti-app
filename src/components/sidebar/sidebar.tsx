import { SidebarItem } from './sidebar-item'
import { SidebarCard } from './sidebar-card'
import { HomeIcon, LibraryIcon, SearchIcon } from '@/assets'
import { CardContainer, Container, Library, Menu } from './styles'

type SidebarProps = {
  closedSidebar: () => void
  isActive: boolean
}

export const Sidebar = ({ isActive, closedSidebar }: SidebarProps) => {
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
          <SidebarCard
            title="Electronic party asda s asd as dsdd a asd asd"
            path="playlist/1"
            subtitle="Avicii, Alok"
            img="https://res.cloudinary.com/dp3ppkxo5/image/upload/v1693776174/spotify-astro/playlist_1_yci5uf.jpg"
          />
          <SidebarCard
            title="Electronic party"
            path="playlist/2"
            subtitle="Avicii, Alok"
            img="https://res.cloudinary.com/dp3ppkxo5/image/upload/v1693776174/spotify-astro/playlist_1_yci5uf.jpg"
          />
          <SidebarCard
            title="Electronic party"
            path="playlist/3"
            subtitle="Avicii, Alok"
            img="https://res.cloudinary.com/dp3ppkxo5/image/upload/v1693776174/spotify-astro/playlist_1_yci5uf.jpg"
          />
          <SidebarCard
            title="Electronic party"
            path="playlist/4"
            subtitle="Avicii, Alok"
            img="https://res.cloudinary.com/dp3ppkxo5/image/upload/v1693776174/spotify-astro/playlist_1_yci5uf.jpg"
          />
        </CardContainer>
      </Library>
    </Container>
  )
}

import { SidebarItem } from './sidebar-item'
import { HomeOutlined, Search, LibraryMusicOutlined } from '@mui/icons-material/'
import { CardContainer, Container, Library, Menu } from './styles'
import { SidebarCard } from './sidebar-card'

export const Sidebar = () => {
  return (
    <Container>
      <Menu>
        <SidebarItem icon={<HomeOutlined sx={{ fontSize: 28 }} />} path="home">
          Home
        </SidebarItem>
        <SidebarItem icon={<Search sx={{ fontSize: 28 }} />} path="search">
          Search
        </SidebarItem>
      </Menu>
      <Library>
        <SidebarItem icon={<LibraryMusicOutlined sx={{ fontSize: 28 }} />}>Your library</SidebarItem>
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

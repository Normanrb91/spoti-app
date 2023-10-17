import { useContext } from 'react'
import { useGreeting } from '@/hooks'
import { CardBody, CardHeader } from '@/components'
import { PlayListContext } from '@/context'
import { BodyContainer, BodyWraper, Container, HeaderContainer, HeaderWraper } from './styles'

export const Home = () => {
  const { greeting } = useGreeting()
  const { userPlayList, featuredPlaylist } = useContext(PlayListContext)

  return (
    <Container>
      <HeaderContainer>
        <h1>{greeting}</h1>
        <HeaderWraper>
          {userPlayList.map(playlist => (
            <CardHeader {...playlist} key={playlist.id} />
          ))}
        </HeaderWraper>
      </HeaderContainer>
      <BodyContainer>
        <h2>Listas destacadas</h2>
        <BodyWraper>
          {featuredPlaylist.map(playlist => (
            <CardBody {...playlist} key={playlist.id} />
          ))}
        </BodyWraper>
      </BodyContainer>
    </Container>
  )
}

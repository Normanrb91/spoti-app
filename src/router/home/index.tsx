import { useContext } from 'react'
import { GradientContext, PlayListContext } from '@/context'
import { CardBody, CardHeader, Loader } from '@/components'
import { useGreeting } from '@/hooks'
import {
  BackGground,
  BodyContainer,
  BodyWraper,
  Container,
  HeaderContainer,
  HeaderWraper,
  LinearGradient
} from './styles'

export const Home = () => {
  const { userPlayList, featuredPlaylist, loading } = useContext(PlayListContext)
  const { color } = useContext(GradientContext)
  const { greeting } = useGreeting()

  if (loading) return <Loader />

  return (
    <Container>
      <BackGground $backColor={color}>
        <HeaderContainer>
          <h1>{greeting}</h1>
          <HeaderWraper>
            {userPlayList.map(playlist => (
              <CardHeader key={playlist.id} {...playlist} />
            ))}
          </HeaderWraper>
        </HeaderContainer>
        <LinearGradient />
      </BackGground>

      <BodyContainer>
        <h2>Listas destacadas</h2>
        <BodyWraper>
          {featuredPlaylist.map(playlist => (
            <CardBody key={playlist.id} {...playlist} />
          ))}
        </BodyWraper>
      </BodyContainer>
    </Container>
  )
}

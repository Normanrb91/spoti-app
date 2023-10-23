import { useContext, useEffect } from 'react'
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
  const { myPlaylists, featuredPlaylists, loading, resetPlayListId } = useContext(PlayListContext)
  const { color } = useContext(GradientContext)
  const { greeting } = useGreeting()

  useEffect(() => {
    resetPlayListId()
  }, [])

  if (loading) return <Loader />

  return (
    <Container>
      <BackGground $backColor={color}>
        <HeaderContainer>
          <h1>{greeting}</h1>
          <HeaderWraper>
            {myPlaylists.map(playlist => (
              <CardHeader key={playlist.id} {...playlist} />
            ))}
          </HeaderWraper>
        </HeaderContainer>
        <LinearGradient />
      </BackGground>

      <BodyContainer>
        <h2>Listas destacadas</h2>
        <BodyWraper>
          {featuredPlaylists.map(playlist => (
            <CardBody key={playlist.id} {...playlist} />
          ))}
        </BodyWraper>
      </BodyContainer>
    </Container>
  )
}

import { useContext } from 'react'
import { AuthContext } from '@/context'
import { Container, LoginButton } from './styles'

export const Login = () => {
  const { signIn } = useContext(AuthContext)

  const handleOnClick = () => {
    signIn()
  }

  return (
    <Container>
      <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="logo_spotify" />
      <LoginButton onClick={handleOnClick}>Connect Spotify</LoginButton>
    </Container>
  )
}

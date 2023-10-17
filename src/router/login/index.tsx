import { Container, LoginButton } from './styles'
import { login_constants } from '@/libs'

export const Login = () => {
  const handleOnClick = () => {
    const { client_id, endpoint, redirect_uri, scope } = login_constants
    const login_url = `${endpoint}?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}&scope=${scope}`

    window.location.href = login_url
  }

  return (
    <Container>
      <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="logo_spotify" />
      <LoginButton onClick={handleOnClick}>Connect Spotify</LoginButton>
    </Container>
  )
}

import { AuthContext } from '@/context'
import { useContext } from 'react'
import { Container, LoginButton } from './styles'

export const Login = () => {
  const { signIn } = useContext(AuthContext)

  const handleOnClick = () => {
    signIn()
  }

  return (
    <Container>
      <img src="https://www.liderlogo.es/wp-content/uploads/2022/12/pasted-image-0-4.png" alt="logo_spotify" />
      <LoginButton onClick={handleOnClick}>Connect</LoginButton>
    </Container>
  )
}

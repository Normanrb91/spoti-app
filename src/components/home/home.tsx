import { useGreeting } from '@/hooks'
import { CardBody } from './card-body'
import { CardHeader } from './card-header'
import { BodyContainer, BodyWraper, Container, HeaderContainer, HeaderWraper } from './styles'

export const Home = () => {
  const { greeting } = useGreeting()

  return (
    <Container>
      <HeaderContainer>
        <h1>{greeting}</h1>
        <HeaderWraper>
          <CardHeader />
          <CardHeader />
          <CardHeader />
          <CardHeader />
          <CardHeader />
          <CardHeader />
        </HeaderWraper>
      </HeaderContainer>
      <BodyContainer>
        <h2>made for you</h2>
        <BodyWraper>
          <CardBody />
          <CardBody />
          <CardBody />
          <CardBody />
          <CardBody />
          <CardBody />
        </BodyWraper>
      </BodyContainer>
    </Container>
  )
}

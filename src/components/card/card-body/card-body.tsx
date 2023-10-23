import { memo, useContext } from 'react'
import { GradientContext } from '@/context'
import { PlayButton } from '@/components'
import { PlayList } from '@/interfaces'
import { Container, Content, IconContainer, ImagenContainer, Link, TextContainer } from './styles'

const CardBody = ({ id, image, name, description }: PlayList) => {
  const { handleMouseEnter, handleMouseLeave } = useContext(GradientContext)

  return (
    <Container onMouseEnter={() => handleMouseEnter(image)} onMouseLeave={handleMouseLeave}>
      <IconContainer>
        <PlayButton id={id} />
      </IconContainer>
      <Link to={`/playlist/${id}`}>
        <Content>
          <ImagenContainer>
            <img src={image} alt={name} />
          </ImagenContainer>
          <TextContainer>
            <h4>{name}</h4>
            <p>{description}</p>
          </TextContainer>
        </Content>
      </Link>
    </Container>
  )
}

const MemoCardBody = memo(CardBody)

export { MemoCardBody as CardBody }

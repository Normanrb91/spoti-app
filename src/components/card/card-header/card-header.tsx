import { memo, useContext } from 'react'
import { GradientContext } from '@/context'
import { PlayButton } from '@/components'
import { PlayList } from '@/interfaces'
import { Container, IconContainer, ImagenContainer, Link, TextContainer } from './styles'

const CardHeader = ({ id, image, name }: PlayList) => {
  const { handleMouseEnter, handleMouseLeave } = useContext(GradientContext)

  return (
    <Container onMouseEnter={() => handleMouseEnter(image)} onMouseLeave={handleMouseLeave}>
      <IconContainer>
        <PlayButton id={id} />
      </IconContainer>
      <Link to={`/playlist/${id}`}>
        <ImagenContainer>
          <img src={image} alt={name} />
        </ImagenContainer>
        <TextContainer>
          <h4>{name}</h4>
        </TextContainer>
      </Link>
    </Container>
  )
}

const MemoCardHeader = memo(CardHeader)

export { MemoCardHeader as CardHeader }

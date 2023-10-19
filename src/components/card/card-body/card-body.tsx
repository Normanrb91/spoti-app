import { memo, useContext } from 'react'
import { GradientContext } from '@/context'
import { PlayList } from '@/interfaces'
import { PlayIcon } from '@/assets'
import { Content, IconContainer, ImagenContainer, Link, TextContainer } from './styles'

const CardBody = ({ id, images, name, description }: PlayList) => {
  const { handleMouseEnter, handleMouseLeave } = useContext(GradientContext)

  return (
    <Link to={`/playlist/${id}`} onMouseEnter={() => handleMouseEnter(images[0].url)} onMouseLeave={handleMouseLeave}>
      <Content>
        <ImagenContainer>
          <img src={images[0].url} alt={name} />
          <IconContainer>
            <button>
              <PlayIcon width={32} height={32} />
            </button>
          </IconContainer>
        </ImagenContainer>
        <TextContainer>
          <h4>{name}</h4>
          <p>{description}</p>
        </TextContainer>
      </Content>
    </Link>
  )
}

const MemoCardBody = memo(CardBody)

export { MemoCardBody as CardBody }

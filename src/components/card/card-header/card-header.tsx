import { memo, useContext } from 'react'
import { GradientContext } from '@/context'
import { PlayList } from '@/interfaces'
import { PlayIcon } from '@/assets'
import { IconContainer, ImagenContainer, Link, TextContainer } from './styles'

const CardHeader = ({ id, images, name }: PlayList) => {
  const { handleMouseEnter, handleMouseLeave } = useContext(GradientContext)

  return (
    <Link to={`/playlist/${id}`} onMouseEnter={() => handleMouseEnter(images[0].url)} onMouseLeave={handleMouseLeave}>
      <ImagenContainer>
        <img src={images[0].url} alt={name} />
      </ImagenContainer>
      <TextContainer>
        <h4>{name}</h4>
      </TextContainer>
      <IconContainer>
        <button>
          <PlayIcon width={32} height={32} />
        </button>
      </IconContainer>
    </Link>
  )
}

const MemoCardHeader = memo(CardHeader)

export { MemoCardHeader as CardHeader }

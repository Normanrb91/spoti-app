import { memo, useContext } from 'react'
import { GradientContext } from '@/context'
import { PlayList } from '@/interfaces'
import { Link, ImagenContainer, TextContainer } from './styles'

const CardSidebar = ({ id, image, name, owner }: PlayList) => {
  const { handleMouseEnter, handleMouseLeave } = useContext(GradientContext)

  return (
    <Link to={`/playlist/${id}`} onMouseEnter={() => handleMouseEnter(image)} onMouseLeave={handleMouseLeave}>
      <ImagenContainer>
        <img src={image} alt={name} />
      </ImagenContainer>
      <TextContainer>
        <h4>{name}</h4>
        <p>{owner}</p>
      </TextContainer>
    </Link>
  )
}

const MemoCardSidebar = memo(CardSidebar)

export { MemoCardSidebar as CardSidebar }

import { memo, useContext } from 'react'
import { GradientContext } from '@/context'
import { PlayList } from '@/interfaces'
import { Link, ImagenContainer, TextContainer } from './styles'

const CardSidebar = ({ id, images, name, owner }: PlayList) => {
  const { handleMouseEnter, handleMouseLeave } = useContext(GradientContext)

  return (
    <Link to={`/playlist/${id}`} onMouseEnter={() => handleMouseEnter(images[0].url)} onMouseLeave={handleMouseLeave}>
      <ImagenContainer>
        <img src={images[0].url} alt={name} />
      </ImagenContainer>
      <TextContainer>
        <h4>{name}</h4>
        <p>{owner.display_name}</p>
      </TextContainer>
    </Link>
  )
}

const MemoCardSidebar = memo(CardSidebar)

export { MemoCardSidebar as CardSidebar }

import { PlayList } from '@/interfaces'
import { Link, ImagenContainer, TextContainer } from './styles'

export const CardSidebar = ({ id, images, name, owner }: PlayList) => {
  return (
    <Link to={`/playlist/${id}`}>
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

import { PlayIcon } from '@/assets'
import { PlayList } from '@/interfaces'
import { IconContainer, ImagenContainer, Link, TextContainer } from './styles'

export const CardHeader = ({ id, images, name }: PlayList) => {
  return (
    <Link to={`/playlist/${id}`}>
      <ImagenContainer>
        <img src={images[0].url} alt={name} />
      </ImagenContainer>
      <TextContainer>
        <h4>{name}</h4>
      </TextContainer>
      <IconContainer>
        <span>
          <PlayIcon width={32} height={32} />
        </span>
      </IconContainer>
    </Link>
  )
}

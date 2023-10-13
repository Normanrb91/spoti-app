import { PlayIcon } from '@/assets'
import { IconContainer, ImagenContainer, Link, TextContainer } from './styles'

export const CardHeader = () => {
  return (
    <Link to="">
      <ImagenContainer>
        <img
          src="https://res.cloudinary.com/dp3ppkxo5/image/upload/v1693776174/spotify-astro/playlist_1_yci5uf.jpg"
          alt=""
        />
      </ImagenContainer>
      <TextContainer>
        <h4>Electrinic Party </h4>
      </TextContainer>
      <IconContainer>
        <span>
          <PlayIcon width={32} height={32} />
        </span>
      </IconContainer>
    </Link>
  )
}

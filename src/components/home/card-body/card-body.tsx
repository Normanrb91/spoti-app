import { PlayIcon } from '@/assets'
import { Content, IconContainer, ImagenContainer, Link, TextContainer } from './styles'

export const CardBody = () => {
  return (
    <Link to="">
      <Content>
        <ImagenContainer>
          <img
            src="https://res.cloudinary.com/dp3ppkxo5/image/upload/v1693776174/spotify-astro/playlist_1_yci5uf.jpg"
            alt=""
          />
          <IconContainer>
            <span>
              <PlayIcon width={32} height={32} />
            </span>
          </IconContainer>
        </ImagenContainer>
        <TextContainer>
          <h4>Electronic Party</h4>
          <p>Avicii, Alok</p>
        </TextContainer>
      </Content>
    </Link>
  )
}

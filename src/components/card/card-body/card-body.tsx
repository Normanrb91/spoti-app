import { PlayIcon } from '@/assets'
import { PlayList } from '@/interfaces'
import { Content, IconContainer, ImagenContainer, Link, TextContainer } from './styles'

export const CardBody = ({ id, images, name, description }: PlayList) => {
  return (
    <Link to={`/playlist/${id}`}>
      <Content>
        <ImagenContainer>
          <img src={images[0].url} alt={name} />
          <IconContainer>
            <span>
              <PlayIcon width={32} height={32} />
            </span>
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

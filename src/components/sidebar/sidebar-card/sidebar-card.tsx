import { Link, ImagenContainer, TextContainer } from './styles'

type SidebarCardProps = {
  img: string
  path: string
  title: string
  subtitle: string
}

export const SidebarCard = ({ img, path, title, subtitle }: SidebarCardProps) => {
  return (
    <Link to={`/${path}`}>
      <ImagenContainer>
        <img src={img} alt={title} />
      </ImagenContainer>
      <TextContainer>
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </TextContainer>
    </Link>
  )
}

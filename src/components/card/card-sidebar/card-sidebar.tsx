import { memo, useContext } from 'react'
import { GradientContext } from '@/context'
import { PlayList } from '@/interfaces'
import { Link, ImagenContainer, TextContainer } from './styles'

type CardSidebarProps = {
  closedSidebar: () => void
  playlist: PlayList
}

const CardSidebar = ({ playlist, closedSidebar }: CardSidebarProps) => {
  const { handleMouseEnter, handleMouseLeave } = useContext(GradientContext)

  return (
    <Link
      to={`/playlist/${playlist.id}`}
      onMouseEnter={() => handleMouseEnter(playlist.image)}
      onMouseLeave={handleMouseLeave}
      onClick={closedSidebar}
    >
      <ImagenContainer>
        <img src={playlist.image} alt={playlist.name} />
      </ImagenContainer>
      <TextContainer>
        <h4>{playlist.name}</h4>
        <p>{playlist.owner}</p>
      </TextContainer>
    </Link>
  )
}

const MemoCardSidebar = memo(CardSidebar)

export { MemoCardSidebar as CardSidebar }

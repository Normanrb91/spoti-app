import { memo, useContext } from 'react'
import { TrackContext } from '@/context'
import { TrackControl } from './track-control'
import { VolumeControl } from './volume-control'
import { Container, ContentLeft, ImagenContainer, TextContainer } from './styles'

const Player = () => {
  const { currentMusic } = useContext(TrackContext)

  return (
    <Container>
      <ContentLeft>
        <ImagenContainer>
          {currentMusic.track && <img src={currentMusic?.track?.album_image} alt={currentMusic?.track?.album_name} />}
        </ImagenContainer>
        <TextContainer>
          <h4>{currentMusic?.track?.name}</h4>
          <p>{currentMusic?.track?.artist}</p>
        </TextContainer>
      </ContentLeft>

      <TrackControl />

      <VolumeControl />
    </Container>
  )
}

const MemoPlayer = memo(Player)

export { MemoPlayer as Player }

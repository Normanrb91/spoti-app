import { memo, useContext } from 'react'
import { PlayListContext, TrackContext } from '@/context'
import { Loader } from '@/components'
import { convertTime } from '@/libs'
import { TimeIcon } from '@/assets'
import { Col, Container, HeaderCol, HeaderRow, ImageContainer, Info, Row, Tracks } from './styles'

const Table = () => {
  const { playlist: playActive } = useContext(PlayListContext)
  const { playlist } = playActive
  const { currentMusic, isPlaying, setTrack, setIsPlaying } = useContext(TrackContext)

  const handleClick = (id: string) => {
    setTrack(id)
    setIsPlaying(true)
  }

  return (
    <Container>
      <HeaderRow>
        <HeaderCol>
          <span>#</span>
        </HeaderCol>
        <HeaderCol>
          <span>Título</span>
        </HeaderCol>
        <HeaderCol>
          <span>Album</span>
        </HeaderCol>
        <HeaderCol>
          <span>
            <TimeIcon />
          </span>
        </HeaderCol>
      </HeaderRow>
      <Tracks>
        {playlist?.tracks.map((track, index) => (
          <Row key={track.id} onClick={() => handleClick(track.id)} $active={currentMusic.index === index}>
            <Col className="number">
              {currentMusic.index === index && isPlaying ? <Loader size="small" /> : <span>{index + 1}</span>}
            </Col>
            <Col>
              <ImageContainer>
                <img src={track.album_image} alt={track.album_name} />
              </ImageContainer>
              <Info>
                <span>{track.name}</span>
                <span>{track.artist}</span>
              </Info>
            </Col>
            <Col className="album">{track.album_name}</Col>
            <Col className="time">{convertTime(track.duration_ms)}</Col>
          </Row>
        ))}
      </Tracks>
    </Container>
  )
}

const MemoTable = memo(Table)

export { MemoTable as Table }

import { memo, useContext } from 'react'
import { PlayListContext } from '@/context'
import { convertTime } from '@/libs'
import { TimeIcon } from '@/assets'
import { Col, Container, HeaderCol, HeaderRow, ImageContainer, Info, Row, Tracks } from './styles'

const Table = () => {
  const { playlist: playActive } = useContext(PlayListContext)
  const { playlist } = playActive

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
          <Row key={track.id}>
            <Col className="number">
              <span>{index + 1}</span>
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

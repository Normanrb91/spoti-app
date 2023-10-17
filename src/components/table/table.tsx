import { useContext } from 'react'
import { PlayListContext } from '@/context'
import { TimeIcon } from '@/assets'
import { Col, Container, HeaderCol, HeaderRow, ImageContainer, Info, Row, Tracks } from './styles'
import { convertTime } from '@/libs'

export const Table = () => {
  const { activePlayList } = useContext(PlayListContext)

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
        {activePlayList?.tracks.items.map((track, index) => (
          <Row key={track.track.id}>
            <Col className="number">
              <span>{index + 1}</span>
            </Col>
            <Col>
              <ImageContainer>
                <img src={track.track.album.images[0].url} alt={track.track.album.name} />
              </ImageContainer>
              <Info>
                <span>{track.track.name}</span>
                <span>{track.track.artists[0].name}</span>
              </Info>
            </Col>
            <Col className="album">{track.track.album.name}</Col>
            <Col className="time">{convertTime(track.track.duration_ms)}</Col>
          </Row>
        ))}
      </Tracks>
    </Container>
  )
}
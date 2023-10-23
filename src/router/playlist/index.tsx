import { useEffect, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useColor } from 'color-thief-react'
import { PlayListContext } from '@/context'
import { Loader, PlayButton, Table } from '@/components'
import { BackIcon } from '@/assets'
import {
  Background,
  BodyContainer,
  BodyWraper,
  Container,
  HeaderContainer,
  HeaderWraper,
  IconBackContainer,
  IconPlayContainer,
  ImagenContainer,
  TextContainer
} from './styles'

export const PlayList = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { getPlayListId, playlist: playActive } = useContext(PlayListContext)
  const { loading, playlist } = playActive

  const { data: color } = useColor(playlist?.image ?? '', 'hex', {
    crossOrigin: '10',
    quality: 10
  })

  useEffect(() => {
    getPlayListId(id!)
  }, [id])

  if (loading) return <Loader />

  return (
    <Container>
      <HeaderContainer $bgColor={color}>
        <IconBackContainer
          onClick={() => {
            navigate('/', { replace: true })
          }}
        >
          <button>
            <BackIcon width={32} height={32} />
          </button>
        </IconBackContainer>
        <HeaderWraper>
          <ImagenContainer>
            <img src={playlist?.image} alt={playlist?.name} />
          </ImagenContainer>
          <TextContainer>
            <span>Lista</span>
            <h1>{playlist?.name}</h1>
            <p>{playlist?.owner}</p>
          </TextContainer>
        </HeaderWraper>
      </HeaderContainer>
      <BodyContainer $bgColor={color}>
        <IconPlayContainer>
          <PlayButton id={playlist?.id} size="big" />
        </IconPlayContainer>
        <BodyWraper>
          <Table />
        </BodyWraper>
      </BodyContainer>
      <Background>
        <img src={playlist?.image} />
      </Background>
    </Container>
  )
}

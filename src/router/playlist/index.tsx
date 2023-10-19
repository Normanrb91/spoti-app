import { useEffect, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useColor } from 'color-thief-react'
import { PlayListContext } from '@/context'
import { Loader, Table } from '@/components'
import { BackIcon, PlayIcon } from '@/assets'
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
  const { getPlayListId, activePlayList } = useContext(PlayListContext)
  const { active, activeLoading } = activePlayList
  const { data: color } = useColor(active?.images[0].url ?? '', 'hex', {
    crossOrigin: '10',
    quality: 10
  })

  useEffect(() => {
    getPlayListId(id!)
  }, [id])

  if (activeLoading) return <Loader />

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
            <img src={active?.images[0].url} alt={active?.name} />
          </ImagenContainer>
          <TextContainer>
            <span>Lista</span>
            <h1>{active?.name}</h1>
            <p>{active?.owner.display_name}</p>
          </TextContainer>
        </HeaderWraper>
      </HeaderContainer>
      <BodyContainer $bgColor={color}>
        <IconPlayContainer>
          <button>
            <PlayIcon width={40} height={40} />
          </button>
        </IconPlayContainer>
        <BodyWraper>
          <Table />
        </BodyWraper>
      </BodyContainer>
      <Background>
        <img src={active?.images[0].url} />
      </Background>
    </Container>
  )
}

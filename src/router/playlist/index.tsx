import { useEffect, useContext } from 'react'
import { PlayListContext } from '@/context'
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
import { BackIcon, PlayIcon } from '@/assets'
import { useNavigate, useParams } from 'react-router-dom'
import { Table } from '@/components'

export const PlayList = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const { getPlayListId, activePlayList } = useContext(PlayListContext)

  useEffect(() => {
    getPlayListId(id!)
  }, [id])

  return (
    <Container>
      <HeaderContainer>
        <IconBackContainer
          onClick={() => {
            navigate('/home'), { replace: true }
          }}
        >
          <span>
            <BackIcon width={32} height={32} />
          </span>
        </IconBackContainer>
        <HeaderWraper>
          <ImagenContainer>
            <img src={activePlayList?.images[0].url} alt={activePlayList?.name} />
          </ImagenContainer>
          <TextContainer>
            <span>Lista</span>
            <h1>{activePlayList?.name}</h1>
            <p>{activePlayList?.owner.display_name}</p>
          </TextContainer>
        </HeaderWraper>
      </HeaderContainer>
      <BodyContainer>
        <IconPlayContainer>
          <span>
            <PlayIcon width={40} height={40} />
          </span>
        </IconPlayContainer>
        <BodyWraper>
          <Table />
        </BodyWraper>
      </BodyContainer>
      <Background>
        <img src={activePlayList?.images[0].url} />
      </Background>
    </Container>
  )
}

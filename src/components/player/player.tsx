import { memo, useState } from 'react'
import {
  Container,
  ContentCenter,
  ContentLeft,
  ContentRight,
  Grid,
  IconControl,
  IconPlayer,
  IconVolume,
  ImagenContainer,
  TextContainer
} from './styles'
import { NextIcon, PauseIcon, PlayIcon, PrevIcon, Volume } from '@/assets'
import { Slider } from '@mui/material'
import { useTheme } from 'styled-components'

const Player = () => {
  const theme = useTheme()
  const [isPlayer, setIsPlayer] = useState(false)

  const toggleIsPlayer = () => {
    setIsPlayer(!isPlayer)
  }

  return (
    <Container>
      <ContentLeft>
        <ImagenContainer>
          <img src="https://i.scdn.co/image/ab67616d0000b27339ef8bae7a9d8c89f12c7126" alt="" />
        </ImagenContainer>
        <TextContainer>
          <h4>Triana grandes éxitos</h4>
          <p>mvalro</p>
        </TextContainer>
      </ContentLeft>

      <ContentCenter>
        <Grid>
          <IconControl>
            <PrevIcon />
          </IconControl>
          {isPlayer ? (
            <IconPlayer onClick={toggleIsPlayer}>
              <PauseIcon />
            </IconPlayer>
          ) : (
            <IconPlayer onClick={toggleIsPlayer}>
              <PlayIcon />
            </IconPlayer>
          )}
          <IconControl>
            <NextIcon />
          </IconControl>
        </Grid>

        <Grid style={{ gap: '8px' }}>
          <span>0:38</span>
          <Slider
            aria-label="song"
            defaultValue={30}
            sx={{
              color: theme.colors.textOn,
              '& .MuiSlider-track': { color: theme.colors.textOn },
              '& .MuiSlider-thumb': {
                display: 'none',
                width: 12,
                height: 12,
                backgroundColor: theme.colors.textOn,
                '&:hover, &.Mui-focusVisible, &.Mui-active': { boxShadow: 'none' }
              },
              '&:hover': {
                '& .MuiSlider-thumb': { display: 'block' },
                '& .MuiSlider-track': { color: theme.colors.secondary }
              }
            }}
          />
          <span>3:45</span>
        </Grid>
      </ContentCenter>

      <ContentRight>
        <Grid style={{ gap: '8px', width: '40%' }}>
          <IconVolume>
            <Volume />
          </IconVolume>
          <Slider
            aria-label="song"
            defaultValue={30}
            sx={{
              color: theme.colors.textOn,
              '& .MuiSlider-track': { color: theme.colors.textOn },
              '& .MuiSlider-thumb': {
                display: 'none',
                width: 12,
                height: 12,
                backgroundColor: theme.colors.textOn,
                '&:hover, &.Mui-focusVisible, &.Mui-active': { boxShadow: 'none' }
              },
              '&:hover': {
                '& .MuiSlider-thumb': { display: 'block' },
                '& .MuiSlider-track': { color: theme.colors.secondary }
              }
            }}
          />
        </Grid>
      </ContentRight>
    </Container>
  )
}

const MemoPlayer = memo(Player)

export { MemoPlayer as Player }

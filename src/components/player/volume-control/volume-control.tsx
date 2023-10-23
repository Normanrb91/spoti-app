import { Slider } from '@mui/material'
import { Container, IconVolume, Wraper } from './styles'
import { Volume } from '@/assets'
import { useEffect, useRef, memo, useContext } from 'react'
import { useTheme } from 'styled-components'
import { TrackContext } from '@/context'

const VolumeControl = () => {
  const theme = useTheme()
  const { volume, setVolume } = useContext(TrackContext)

  return (
    <Container>
      <Wraper style={{ gap: '8px', width: '40%' }}>
        <IconVolume>
          <Volume />
        </IconVolume>
        <Slider
          aria-label="volume"
          min={0}
          max={100}
          value={volume * 100}
          onChange={({ target }: any) => {
            const volumeValue = Number(target.value)
            setVolume(volumeValue / 100)
          }}
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
      </Wraper>
    </Container>
  )
}

const MemoVolumeControl = memo(VolumeControl)

export { MemoVolumeControl as VolumeControl }

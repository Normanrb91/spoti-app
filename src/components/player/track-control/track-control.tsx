import { useEffect, useState, useRef, memo, useContext } from 'react'
import { Slider } from '@mui/material'
import { useTheme } from 'styled-components'
import { TrackContext } from '@/context'
import { convertTimeS } from '@/libs'
import { NextIcon, PauseIcon, PlayIcon, PrevIcon } from '@/assets'
import { Container, IconControl, IconPlayer, Wraper } from './styles'

const TrackControl = () => {
  const theme = useTheme()
  const audio = useRef<HTMLAudioElement>(null)
  const { isPlaying, setIsPlaying, volume, currentMusic } = useContext(TrackContext)
  const [currentTime, setCurrentTime] = useState(0)
  const duration = audio?.current?.duration ?? 0

  useEffect(() => {
    isPlaying ? audio.current!.play() : audio.current!.pause()
  }, [isPlaying])

  useEffect(() => {
    audio.current!.volume = volume
  }, [volume])

  useEffect(() => {
    if (currentMusic.track) {
      const { track } = currentMusic
      const src = track.preview_url
      audio.current!.src = src
      audio.current!.volume = volume
      audio.current!.play()
    }
  }, [currentMusic])

  useEffect(() => {
    audio.current!.addEventListener('timeupdate', handleTimeUpdate)

    return () => {
      audio.current!.removeEventListener('timeupdate', handleTimeUpdate)
    }
  }, [])

  const handleClick = () => {
    setIsPlaying(!isPlaying)
  }

  const handleTimeUpdate = () => {
    setCurrentTime(audio.current!.currentTime)
  }

  const handleNextTrack = () => {}

  const handlePrevTrack = () => {}

  return (
    <Container>
      <Wraper>
        <IconControl onClick={handlePrevTrack}>
          <PrevIcon />
        </IconControl>

        <IconPlayer onClick={handleClick}>{isPlaying ? <PauseIcon /> : <PlayIcon />}</IconPlayer>

        <IconControl onClick={handleNextTrack}>
          <NextIcon />
        </IconControl>
        <audio ref={audio} />
      </Wraper>

      <Wraper style={{ gap: '8px' }}>
        <span>{convertTimeS(currentTime)}</span>
        <Slider
          aria-label="song"
          value={currentTime}
          max={audio?.current?.duration || 0}
          min={0}
          onChange={({ target }: any) => {
            audio.current!.currentTime = target?.value
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
        <span>{duration ? convertTimeS(duration) : '0:00'}</span>
      </Wraper>
    </Container>
  )
}

const MemoTrackControl = memo(TrackControl)

export { MemoTrackControl as TrackControl }

import { useEffect, useState, useRef, memo, useContext } from 'react'
import { Alert, Slider, Snackbar } from '@mui/material'
import { useTheme } from 'styled-components'
import { TrackContext } from '@/context'
import { convertTimeS } from '@/libs'
import { NextIcon, PauseIcon, PlayIcon, PrevIcon } from '@/assets'
import { Container, IconControl, IconPlayer, Wraper } from './styles'

const TrackControl = () => {
  const theme = useTheme()
  const audio = useRef<HTMLAudioElement>(null)
  const { isPlaying, setIsPlaying, volume, currentMusic, setNextTrack, setPrevTrack } = useContext(TrackContext)
  const [currentTime, setCurrentTime] = useState(0)
  const [open, setOpen] = useState(false)
  const duration = audio?.current?.duration ?? 0

  useEffect(() => {
    isPlaying && audio.current!.readyState > audio.current!.HAVE_CURRENT_DATA
      ? audio.current!.play()
      : audio.current!.pause()
  }, [isPlaying])

  useEffect(() => {
    audio.current!.volume = volume
  }, [volume])

  useEffect(() => {
    if (currentMusic.track?.preview_url === '') {
      audio.current!.pause()
      audio.current!.currentTime = 0
      audio.current!.src = ''
      setOpen(true)
      return
    }

    if (currentMusic.track) {
      const { track } = currentMusic
      const src = track.preview_url
      audio.current!.src = src
      audio.current!.volume = volume
      isPlaying ? audio.current!.play() : audio.current!.pause()
    }
  }, [currentMusic])

  useEffect(() => {
    audio.current!.addEventListener('timeupdate', handleTimeUpdate)
    audio.current!.addEventListener('ended', handleEnded)

    return () => {
      audio.current!.removeEventListener('timeupdate', handleTimeUpdate)
      audio.current!.removeEventListener('ended', handleEnded)
    }
  }, [setNextTrack])

  const handleClick = () => {
    setIsPlaying(!isPlaying)
  }

  const handleTimeUpdate = () => {
    setCurrentTime(audio.current!.currentTime)
  }

  const handleEnded = () => {
    setTimeout(() => {
      setNextTrack()
    }, 500)
  }

  const handleNextTrack = () => {
    setCurrentTime(0)
    setNextTrack()
  }

  const handlePrevTrack = () => {
    setCurrentTime(0)
    setPrevTrack()
  }

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

      <Snackbar
        open={open}
        autoHideDuration={800}
        onClose={() => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <Alert onClose={() => setOpen(false)} severity="error">
          Canción no disponible
        </Alert>
      </Snackbar>
    </Container>
  )
}

const MemoTrackControl = memo(TrackControl)

export { MemoTrackControl as TrackControl }

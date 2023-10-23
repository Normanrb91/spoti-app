import { memo, useContext } from 'react'
import { Button } from './styles'
import { TrackContext } from '@/context'
import { PauseIcon, PlayIcon } from '@/assets'

type PlayButtonProps = {
  id: string | undefined
  size?: string
}

const PlayButton = ({ id, size = 'small' }: PlayButtonProps) => {
  const { isPlaying, setIsPlaying, setCurrentMusic, currentMusic } = useContext(TrackContext)
  const isPlayingList = isPlaying && currentMusic.playlist?.id === id
  const iconSize =
    size === 'small'
      ? { widthB: '48px', heigthB: '48px', widthI: 32, heigthI: 32 }
      : { widthB: '56px', heigthB: '56px', widthI: 40, heigthI: 50 }

  const handleClick = () => {
    if (isPlayingList) {
      setIsPlaying(false)
      return
    }

    setIsPlaying(true)
    if (currentMusic.playlist?.id !== id) {
      setCurrentMusic(id ?? '')
    }
  }

  return (
    <Button $width={iconSize.heigthB} $height={iconSize.heigthB} onClick={handleClick}>
      {isPlayingList ? (
        <PauseIcon width={24} height={24} />
      ) : (
        <PlayIcon width={iconSize.widthI} height={iconSize.heigthI} />
      )}
    </Button>
  )
}

const MemoPlayButton = memo(PlayButton)

export { MemoPlayButton as PlayButton }

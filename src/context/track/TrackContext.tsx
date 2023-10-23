import { createContext } from 'react'
import { PlayListId, Track } from '@/interfaces'

export interface CurrentMusic {
  track: Track | null
  tracks: Track[]
  playlist: PlayListId | null
}

export interface TrackContextProps {
  isPlaying: boolean
  currentMusic: CurrentMusic
  volume: number
  setVolume: (volume: number) => void
  setIsPlaying: (isPlaying: boolean) => void
  setCurrentMusic: (id: string) => Promise<void>
}

export const TrackContext = createContext({} as TrackContextProps)

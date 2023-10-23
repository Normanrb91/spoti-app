import { createContext } from 'react'
import { PlayList, PlayListId, Track } from '@/interfaces'

export interface PlayListContextProps {
  myPlaylists: PlayList[]
  featuredPlaylists: PlayList[]
  playlist: {
    loading: boolean
    playlist: PlayListId | null
  }
  loading: boolean

  getPLayLists: () => Promise<void>
  getPlayListId: (id: string) => Promise<void>
  resetPlayListId: () => void
}

export const PlayListContext = createContext({} as PlayListContextProps)

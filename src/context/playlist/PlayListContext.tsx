import { createContext } from 'react'
import { PlayList, PlayListIdResponse } from '@/interfaces'

export interface PlayListContextProps {
  userPlayList: PlayList[]
  featuredPlaylist: PlayList[]
  activePlayList: PlayListIdResponse | null
  tracksPlayList: any[]
  activeTrack: any

  getPLayLists: () => Promise<void>
  getPlayListId: (id: string) => Promise<void>
  getTracksPlayList: () => Promise<void>
  setActivePlayList: () => void
  setActiveTrack: () => void
}

export const PlayListContext = createContext({} as PlayListContextProps)

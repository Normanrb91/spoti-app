import { createContext } from 'react'
import { PlayList, PlayListIdResponse } from '@/interfaces'

export interface PlayListContextProps {
  userPlayList: PlayList[]
  featuredPlaylist: PlayList[]
  activePlayList: { activeLoading: boolean; active: PlayListIdResponse | null }
  activeTrack: any
  loading: boolean

  getPLayLists: () => Promise<void>
  getPlayListId: (id: string) => Promise<void>
  getTrack: () => void
}

export const PlayListContext = createContext({} as PlayListContextProps)

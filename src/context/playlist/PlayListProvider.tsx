import { type PropsWithChildren, useReducer, useContext } from 'react'
import { FeaturedResponse, PlayListIdResponse, PlayListResponse } from '@/interfaces'
import { spotiApi } from '@/libs'
import { PlayListState, plaListReducer } from './playListReducer'
import { PlayListContext } from './PlayListContext'
import { AuthContext } from '../auth'

const initialState: PlayListState = {
  userPlayList: [],
  featuredPlaylist: [],
  activePlayList: { activeLoading: true, active: null },
  activeTrack: null,
  loading: true
}

export const PlayListProvider = ({ children }: PropsWithChildren) => {
  const [playListState, dispatch] = useReducer(plaListReducer, initialState)
  const { logout } = useContext(AuthContext)

  const getPLayLists = async () => {
    try {
      const { data: user } = await spotiApi.get<PlayListResponse>('me/playlists?limit=6&offset=0')
      const { data: featured } = await spotiApi.get<FeaturedResponse>('browse/featured-playlists?limit=10&offset=0')

      dispatch({
        type: 'addPlayLists',
        payload: {
          user: user.items,
          featured: featured.playlists.items
        }
      })
    } catch (error) {
      console.log(error)
      logout()
    }
  }

  const getPlayListId = async (id: string) => {
    try {
      if (playListState.activePlayList.active?.id !== id) {
        dispatch({ type: 'DeletedActivePlaylist' })

        const { data } = await spotiApi.get<PlayListIdResponse>(`/playlists/${id}`)

        dispatch({
          type: 'addActivePlaylist',
          payload: data
        })
      }
    } catch (error) {
      console.log(error)
      logout()
    }
  }

  const getTrack = () => {}

  return (
    <PlayListContext.Provider
      value={{
        ...playListState,
        getPLayLists,
        getPlayListId,
        getTrack
      }}
    >
      {children}
    </PlayListContext.Provider>
  )
}

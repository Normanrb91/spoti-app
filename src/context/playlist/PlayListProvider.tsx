import { type PropsWithChildren, useReducer, useContext } from 'react'
import { FeaturedResponse, PlayListIdResponse, PlayListResponse } from '@/interfaces'
import { login_constants, mapPlaylistId, mapPlaylists, spotiApi } from '@/libs'
import { PlayListState, plaListReducer } from './playListReducer'
import { PlayListContext } from './PlayListContext'
import { AuthContext } from '../auth'

const initialState: PlayListState = {
  myPlaylists: [],
  featuredPlaylists: [],
  playlist: {
    loading: true,
    playlist: null
  },
  loading: true
}

export const PlayListProvider = ({ children }: PropsWithChildren) => {
  const [playListState, dispatch] = useReducer(plaListReducer, initialState)
  const { logout } = useContext(AuthContext)
  const { id_user } = login_constants

  const getPLayLists = async () => {
    try {
      const { data: list } = await spotiApi.get<PlayListResponse>(`v1/users/${id_user}/playlists?limit=6&offset=0`)
      const { data: featured } = await spotiApi.get<FeaturedResponse>('v1/browse/featured-playlists?limit=10&offset=0')
      const listsMap = mapPlaylists(list)
      const featuredmap = mapPlaylists(featured.playlists)

      dispatch({
        type: 'setPlaylists',
        payload: {
          user: listsMap,
          featured: featuredmap
        }
      })
    } catch (error) {
      console.log(error)
      logout()
    }
  }

  const getPlayListId = async (id: string) => {
    try {
      const { data } = await spotiApi.get<PlayListIdResponse>(`v1/playlists/${id}`)
      const playlistMap = mapPlaylistId(data)

      dispatch({
        type: 'setPlaylist',
        payload: { playlist: playlistMap, loading: false }
      })
    } catch (error) {
      console.log(error)
      logout()
    }
  }

  const resetPlayListId = () => {
    dispatch({
      type: 'setPlaylist',
      payload: { playlist: null, loading: true }
    })
  }

  return (
    <PlayListContext.Provider
      value={{
        ...playListState,
        getPLayLists,
        getPlayListId,
        resetPlayListId
      }}
    >
      {children}
    </PlayListContext.Provider>
  )
}

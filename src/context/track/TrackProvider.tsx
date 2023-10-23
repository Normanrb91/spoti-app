import { type PropsWithChildren, useReducer, useContext } from 'react'
import { TrackState, trackReducer } from './TrackReducer'
import { CurrentMusic, TrackContext } from './TrackContext'
import { AuthContext } from '../auth'
import { PlayListIdResponse } from '@/interfaces'
import { mapPlaylistId, mapTrackList, spotiApi } from '@/libs'

const initialState: TrackState = {
  isPlaying: false,
  currentMusic: { track: null, tracks: [], playlist: null },
  volume: 0.3
}

export const TrackProvider = ({ children }: PropsWithChildren) => {
  const [trackState, dispatch] = useReducer(trackReducer, initialState)
  const { logout } = useContext(AuthContext)

  const setVolume = (volume: number) => {
    dispatch({
      type: 'setVolume',
      payload: volume
    })
  }

  const setIsPlaying = (isPlaying: boolean) => {
    dispatch({
      type: 'setIsPlaying',
      payload: isPlaying
    })
  }

  const setCurrentMusic = async (id: string) => {
    try {
      const { data } = await spotiApi.get<PlayListIdResponse>(`/playlists/${id}`)
      const listTracks = mapTrackList(data)
      const playlistMap = mapPlaylistId(data)
      const currentMusic: CurrentMusic = { track: listTracks[0], tracks: listTracks, playlist: playlistMap }

      dispatch({
        type: 'setCurrentMusic',
        payload: currentMusic
      })
    } catch (error) {
      console.log(error)
      logout()
    }
  }

  return (
    <TrackContext.Provider
      value={{
        ...trackState,
        setVolume,
        setIsPlaying,
        setCurrentMusic
      }}
    >
      {children}
    </TrackContext.Provider>
  )
}

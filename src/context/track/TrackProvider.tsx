import { type PropsWithChildren, useReducer, useContext } from 'react'
import { PlayListIdResponse } from '@/interfaces'
import { mapPlaylistId, mapTrackList, spotiApi } from '@/libs'
import { TrackState, trackReducer } from './TrackReducer'
import { CurrentMusic, TrackContext } from './TrackContext'
import { AuthContext } from '../auth'

const initialState: TrackState = {
  isPlaying: false,
  currentMusic: { track: null, tracks: [], playlist: null, index: 0 },
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
      const currentMusic: CurrentMusic = {
        track: listTracks[0],
        tracks: listTracks,
        playlist: playlistMap,
        index: 0
      }

      dispatch({
        type: 'setCurrentMusic',
        payload: currentMusic
      })
    } catch (error) {
      console.log(error)
      logout()
    }
  }

  const setNextTrack = () => {
    if (trackState.currentMusic.index >= trackState.currentMusic.tracks.length - 1) {
      setIsPlaying(false)
      return
    }

    dispatch({
      type: 'setIndexTrack',
      payload: trackState.currentMusic.index + 1
    })
  }

  const setPrevTrack = () => {
    if (trackState.currentMusic.index <= 0) return

    dispatch({
      type: 'setIndexTrack',
      payload: trackState.currentMusic.index - 1
    })
  }

  return (
    <TrackContext.Provider
      value={{
        ...trackState,
        setVolume,
        setIsPlaying,
        setCurrentMusic,
        setNextTrack,
        setPrevTrack
      }}
    >
      {children}
    </TrackContext.Provider>
  )
}

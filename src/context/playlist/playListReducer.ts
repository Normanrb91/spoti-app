import { PlayList, PlayListId, PlayListIdResponse, Track } from "@/interfaces"

export interface PlayListState {
    myPlaylists: PlayList[]
    featuredPlaylists: PlayList[]
    playlist: { 
        loading: boolean
        playlist: PlayListId | null
    }
    loading: boolean
  }

type playListAction = 
    | { type: 'setPlaylists', payload: { user: PlayList[], featured: PlayList[] }}
    | { type: 'setPlaylist', payload: { loading: boolean, playlist: PlayListId | null}}
    | { type: 'DeletedActivePlaylist'}
    | { type: 'addActiveTrack', payload: any}
   


export const plaListReducer = (state: PlayListState, action: playListAction): PlayListState => {

    switch (action.type) {
        case 'setPlaylists':         
            return{
                ...state,
                myPlaylists: action.payload.user,
                featuredPlaylists: action.payload.featured,
                loading: false
            }

        case 'setPlaylist':         
            return{
                ...state,
                playlist: {
                    playlist: action.payload.playlist, 
                    loading: action.payload.loading
                }
            }
        default:
            return state
    }
}
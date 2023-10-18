import { PlayList, PlayListIdResponse } from "@/interfaces"

export interface PlayListState {
    userPlayList: PlayList[]
    featuredPlaylist: PlayList[]
    activePlayList: { activeLoading: boolean; active: PlayListIdResponse | null }
    activeTrack: any
    loading: boolean
  }

type playListAction = 
    | { type: 'addPlayLists', payload: { user: PlayList[], featured: PlayList[] }}
    | { type: 'addActivePlaylist', payload: PlayListIdResponse}
    | { type: 'DeletedActivePlaylist'}
    | { type: 'addActiveTrack', payload: any}
   


export const plaListReducer = (state: PlayListState, action: playListAction): PlayListState => {

    switch (action.type) {
        case 'addPlayLists':         
            return{
                ...state,
                userPlayList: action.payload.user,
                featuredPlaylist: action.payload.featured,
                loading: false
            }
        case 'addActivePlaylist': 
            return{
                ...state,
                activePlayList: {
                    activeLoading: false,
                    active: action.payload
                }
            }
        case 'DeletedActivePlaylist': 
            return{
                ...state,
                activePlayList: {
                    activeLoading: true,
                    active: null
                }
            }

        case 'addActiveTrack': 
            return{
                ...state,
                activeTrack: action.payload
            }

        default:
            return state
    }
}
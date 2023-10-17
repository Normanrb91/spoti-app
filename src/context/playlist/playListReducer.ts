import { PlayList, PlayListIdResponse } from "@/interfaces"

export interface PlayListState {
    userPlayList: PlayList[]
    featuredPlaylist: PlayList[]
    activePlayList: PlayListIdResponse | null
    tracksPlayList: any[]
    activeTrack: any
  }

type playListAction = 
    | { type: 'addPlayLists', payload: { user: PlayList[], featured: PlayList[] }}
    | { type: 'addActivePlaylist', payload: PlayListIdResponse}
    | { type: 'addTracksPlayList', payload: any}
    | { type: 'addActiveTrack', payload: any}
   


export const plaListReducer = (state: PlayListState, action: playListAction): PlayListState => {

    switch (action.type) {
        case 'addPlayLists':         
            return{
                ...state,
                userPlayList: action.payload.user,
                featuredPlaylist: action.payload.featured
            }
        case 'addActivePlaylist': 
            return{
                ...state,
                activePlayList: action.payload
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
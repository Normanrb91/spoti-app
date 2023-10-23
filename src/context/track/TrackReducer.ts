import { CurrentMusic } from "./TrackContext"

export interface TrackState {
    isPlaying: boolean
    currentMusic: CurrentMusic
    volume: number
  }

type trackAction = 
    | { type: 'setVolume', payload: number}
    | { type: 'setIsPlaying', payload: boolean}
    | { type: 'setCurrentMusic', payload: CurrentMusic}


export const trackReducer = (state: TrackState, action: trackAction): TrackState => {

    switch (action.type) {

        case 'setVolume': 
            return {
                ...state,
                volume: action.payload
            }

        case 'setIsPlaying': 
            return {
                ...state,
                isPlaying: action.payload
            }

        case 'setCurrentMusic': 
            return {
                ...state,
                currentMusic: action.payload
            }
        
        default:
            return state
    }
}
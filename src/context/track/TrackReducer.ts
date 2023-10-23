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
    | { type: 'setIndexTrack', payload: number}


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

        case 'setIndexTrack':    
            return {
                ...state,
                currentMusic: {
                    ...state.currentMusic,
                    track: state.currentMusic.tracks[action.payload],
                    index: action.payload
                }
            }
        
        default:
            return state
    }
}
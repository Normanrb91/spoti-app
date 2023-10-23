export interface PlayList {
    id: string
    image: string
    name: string
    description: string
    owner: string
}

export interface PlayListId {
    id: string
    image:string
    name: string
    owner: string
    tracks: Track[]
}

export interface Track {
    id: string
    name: string
    album_image: string
    album_name: string
    artist: string
    duration_ms: number
    preview_url: string
}
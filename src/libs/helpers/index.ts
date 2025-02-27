import { PlayList, PlayListId, PlayListIdResponse, PlayListResponse, Track } from '@/interfaces'

export const convertTime = (ms: number): string => {
  if (ms == null) return '0:00'

  const minutes = Math.floor(ms / 60000)
  const seconds = Math.floor((ms % 60000) / 1000)

  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

export const convertTimeS = (s: number): string => {
  if (s == null) return '0:00'

  const seconds = Math.floor(s % 60)
  const minutes = Math.floor(s / 60)

  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

export const mapPlaylists = (list: PlayListResponse): PlayList[] => {
  const { items } = list

  const playList = items.map(item => {
    return {
      id: item.id,
      image: item.images[0].url,
      name: item.name,
      description: item.description,
      owner: item.owner.display_name
    }
  })

  return playList
}

export const mapPlaylistId = (playlist: PlayListIdResponse): PlayListId => {
  const { images, name, owner, tracks, id } = playlist

  const songs = tracks.items.map(item => {
    return {
      id: item.track?.id,
      name: item.track?.name,
      album_image: item.track.album.images[0].url,
      album_name: item.track.album?.name.toString() ?? 'No name',
      artist: item.track.artists[0].name?.toString() ?? '',
      duration_ms: item.track.duration_ms,
      preview_url: item.track.preview_url ?? ''
    }
  })

  const playListId = {
    id: id,
    image: images[0].url,
    name: name,
    owner: owner.display_name,
    tracks: songs
  }

  return playListId
}

export const mapTrackList = (list: PlayListIdResponse): Track[] => {
  const { tracks } = list

  const songs = tracks.items.map(item => {
    return {
      id: item.track.id,
      name: item.track.name,
      album_image: item.track.album.images[0].url,
      album_name: item.track.album.name.toString(),
      artist: item.track.artists[0].name?.toString() ?? '',
      duration_ms: item.track.duration_ms,
      preview_url: item.track.preview_url ?? ''
    }
  })
  return songs
}

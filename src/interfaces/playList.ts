// Generated by https://quicktype.io

export interface PlayListResponse {
    href:     string;
    items:    PlayList[];
    limit:    number;
    next:     null;
    offset:   number;
    previous: null;
    total:    number;
}

export interface FeaturedResponse {
    message:   string;
    playlists: PlayListResponse;
}

export interface PlayList {
    collaborative: boolean;
    description:   string;
    external_urls: ExternalUrls;
    href:          string;
    id:            string;
    images:        Image[];
    name:          string;
    owner:         Owner;
    primary_color: null;
    public:        boolean;
    snapshot_id:   string;
    tracks:        TracksList;
    type:          string;
    uri:           string;
}

export interface ExternalUrls {
    spotify: string;
}

export interface Image {
    height: number;
    url:    string;
    width:  number;
}

export interface Owner {
    display_name:  string;
    external_urls: ExternalUrls;
    href:          string;
    id:            string;
    type:          string;
    uri:           string;
    name?:         OwnerName;
}

export interface TracksList {
    href:  string;
    total: number;
}


// Generated by https://quicktype.io

export interface PlayListIdResponse {
    collaborative: boolean;
    description:   string;
    external_urls: ExternalUrls;
    followers:     Followers;
    href:          string;
    id:            string;
    images:        Image[];
    name:          string;
    owner:         Owner;
    primary_color: null;
    public:        boolean;
    snapshot_id:   string;
    tracks:        Tracks;
    type:          string;
    uri:           string;
}

export interface Followers {
    href:  null;
    total: number;
}

export enum OwnerName {
    Triana = "Triana",
    TrianaF = "Triana (F)",
}


export enum DisplayName {
    Empty = "",
    Mvalero = "mvalero",
    The3YBpdF4IDWobgNAJLDt2Gu = "3YBpdF4iDWobgNAJLDt2gu",
    The5HlBb5U8K5D8YrL8JwZ7N9 = "5hlBb5u8K5D8yrL8jwZ7N9",
}


export enum OwnerType {
    Artist = "artist",
    User = "user",
}

export enum OwnerURI {
    SpotifyArtist3YBpdF4IDWobgNAJLDt2Gu = "spotify:artist:3YBpdF4iDWobgNAJLDt2gu",
    SpotifyArtist5HlBb5U8K5D8YrL8JwZ7N9 = "spotify:artist:5hlBb5u8K5D8yrL8jwZ7N9",
    SpotifyUser = "spotify:user:",
    SpotifyUserMvalero = "spotify:user:mvalero",
}

export interface Tracks {
    href:     string;
    items:    Item[];
    limit:    number;
    next:     null;
    offset:   number;
    previous: null;
    total:    number;
}

export interface Item {
    added_at:        string;
    added_by:        Owner;
    is_local:        boolean;
    primary_color:   null;
    track:           Track;
    video_thumbnail: VideoThumbnail;
}

export interface Track {
    album:             Album;
    artists:           Owner[];
    available_markets: string[];
    disc_number:       number;
    duration_ms:       number;
    episode:           boolean;
    explicit:          boolean;
    external_ids:      ExternalIDS;
    external_urls:     ExternalUrls;
    href:              string;
    id:                string;
    is_local:          boolean;
    name:              string;
    popularity:        number;
    preview_url:       null | string;
    track:             boolean;
    track_number:      number;
    type:              TrackType;
    uri:               string;
}

export interface Album {
    album_type:             AlbumTypeEnum;
    artists:                Owner[];
    available_markets:      string[];
    external_urls:          ExternalUrls;
    href:                   string;
    id:                     ID;
    images:                 Image[];
    name:                   AlbumName;
    release_date:           string;
    release_date_precision: ReleaseDatePrecision;
    total_tracks:           number;
    type:                   AlbumTypeEnum;
    uri:                    AlbumURI;
}

export enum AlbumTypeEnum {
    Album = "album",
}

export enum ID {
    The08RShhOAzNuyfkN3ZQ8JJU = "08RShhOAzNuyfkN3zQ8jJU",
    The3LPCKmwuLKIPTsXBWFFEs4 = "3LpcKmwuLKIpTsXBWFFEs4",
    The7FcHAFDBTmPmspkHt8JUtF = "7FcHAfDBTmPmspkHt8jUtF",
}

export enum AlbumName {
    QuieroContarte = "Quiero contarte",
    SEDeUnLugarEdicionEspecial = "Se de un lugar (Edicion especial)",
    UnaHistoria = "Una Historia",
}

export enum ReleaseDatePrecision {
    Day = "day",
    Year = "year",
}

export enum AlbumURI {
    SpotifyAlbum08RShhOAzNuyfkN3ZQ8JJU = "spotify:album:08RShhOAzNuyfkN3zQ8jJU",
    SpotifyAlbum3LPCKmwuLKIPTsXBWFFEs4 = "spotify:album:3LpcKmwuLKIpTsXBWFFEs4",
    SpotifyAlbum7FcHAFDBTmPmspkHt8JUtF = "spotify:album:7FcHAfDBTmPmspkHt8jUtF",
}

export interface ExternalIDS {
    isrc: string;
}

export enum TrackType {
    Track = "track",
}

export interface VideoThumbnail {
    url: null;
}

export const login_constants = {
    endpoint: 'https://accounts.spotify.com/authorize',
    client_id: '731f9fdb62444da58ea9c04d46b0de30',
    redirect_uri : 'http://localhost:5173/',
    scope2: [
        'user-read-email', 
        'user-read-private',
        'user-read-playback-state',
        'user-modify-playback-state',
        'user-read-currently-playing',
        'user-read-playback-position',
        'user-top-read',
        'user-read-recently-played',
        'user-library-modify',
        'user-library-read'
    ],
    scope : 'user-read-private user-read-email playlist-read-private'
}



export const BASE_URL = 'https://api.spotify.com/v1/'
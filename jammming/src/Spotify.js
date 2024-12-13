const clientId = 'YOUR_SPOTIFY_CLIENT_ID'; // Spotify app's client ID
const redirectUri = 'http://localhost:3000/'; // app's redirect URI
let accessToken;
let expiresIn;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    // Check if token is in the URL
    const urlToken = window.location.href.match(/access_token=([^&]*)/);
    const urlExpiresIn = window.location.href.match(/expires_in=([^&]*)/);

    if (urlToken && urlExpiresIn) {
      accessToken = urlToken[1];
      expiresIn = Number(urlExpiresIn[1]);

      // Clear the parameters from the URL
      window.setTimeout(() => (accessToken = ''), expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');

      return accessToken;
    }

    // If token not in URL, redirect to Spotify for authentication
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${encodeURIComponent(
      redirectUri
    )}`;
    window.location = authUrl;
  },

  async search(term) {
    const token = Spotify.getAccessToken();
    const response = await fetch(
      `https://api.spotify.com/v1/search?type=track&q=${term}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    const jsonResponse = await response.json();
    if (!jsonResponse.tracks) {
      return [];
    }
    return jsonResponse.tracks.items.map((track) => ({
      id: track.id,
      name: track.name,
      artist: track.artists[0].name,
      album: track.album.name,
      uri: track.uri,
    }));
  },

  async savePlaylist(playlistName, trackUris) {
    if (!playlistName || !trackUris.length) {
      return;
    }

    const token = Spotify.getAccessToken();
    const headers = { Authorization: `Bearer ${token}` };
    let userId;

    // Get User ID
    const userResponse = await fetch('https://api.spotify.com/v1/me', {
      headers: headers,
    });
    const userJson = await userResponse.json();
    userId = userJson.id;

    // Create a Playlist
    const createPlaylistResponse = await fetch(
      `https://api.spotify.com/v1/users/${userId}/playlists`,
      {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({ name: playlistName }),
      }
    );
    const playlistJson = await createPlaylistResponse.json();
    const playlistId = playlistJson.id;

    // Add Tracks to Playlist
    await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
      {
        headers: headers,
        method: 'POST',
        body: JSON.stringify({ uris: trackUris }),
      }
    );
  },
};

export default Spotify;

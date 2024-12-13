const clientId = '3da6d518fbe54b3fbf81d70afe5c4a44'; // Spotify app's client ID
const redirectUri = 'https://effective-space-telegram-69rpgj99xj5r25w9w-3000.app.github.dev/'; // app's redirect URI
let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    // Check for token in the URL
    const tokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresMatch = window.location.href.match(/expires_in=([^&]*)/);

    if (tokenMatch && expiresMatch) {
      accessToken = tokenMatch[1];
      const expiresIn = Number(expiresMatch[1]);

      // Clear the access token from the URL
      window.setTimeout(() => (accessToken = ''), expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken;
    } else {
      // Redirect to Spotify authorization page
      const scope = 'playlist-modify-public';
      const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=${scope}&redirect_uri=${redirectUri}`;
      window.location = authUrl;
    }
  },

  async search(term) {
    const token = Spotify.getAccessToken();
    const endpoint = `https://api.spotify.com/v1/search?type=track&q=${encodeURIComponent(term)}`;

    try {
      const response = await fetch(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch search results');
      }

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
    } catch (error) {
      console.error('Error fetching search results:', error);
      return [];
    }
  },
};

export default Spotify;

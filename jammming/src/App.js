import React from 'react';
import { SearchBar } from './SearchBar';
import { SearchResults } from './SearchResults';
import { Playlist } from './Playlist';
import './App.css';

function App() {
  // Hardcoded array of track objects
  const [tracks] = useState([
    { id: 1, name: 'Track 1', artist: 'Artist 1', album: 'Album 1' },
    { id: 2, name: 'Track 2', artist: 'Artist 2', album: 'Album 2' },
    { id: 3, name: 'Track 3', artist: 'Artist 3', album: 'Album 3' },
    { id: 4, name: 'Track 4', artist: 'Artist 4', album: 'Album 4' },
  ]);
  
  // Hardcoded playlist data for testing
  const [playlist, setPlaylist] = useState({
    name: 'My Playlist',
    tracks: [
      { id: 1, name: 'Track 1', artist: 'Artist 1', album: 'Album 1' },
      { id: 2, name: 'Track 2', artist: 'Artist 2', album: 'Album 2' },
      { id: 3, name: 'Track 3', artist: 'Artist 3', album: 'Album 3' },
    ]
  });

  // Hardcoded search results (simulating API response)
  const [searchResults, setSearchResults] = useState([
    { id: 4, name: 'Track 4', artist: 'Artist 4', album: 'Album 4' },
    { id: 5, name: 'Track 5', artist: 'Artist 5', album: 'Album 5' },
    { id: 6, name: 'Track 6', artist: 'Artist 6', album: 'Album 6' },
  ]);

  // Method to add a track to the playlist if it's not already there
  const addTrackToPlaylist = (track) => {
    if (!playlist.tracks.some(existingTrack => existingTrack.id === track.id)) {
      setPlaylist(prevPlaylist => ({
        ...prevPlaylist,
        tracks: [...prevPlaylist.tracks, track]
      }));
    }
  };

  // Method to remove a track from the playlist
  const removeTrackFromPlaylist = (track) => {
    setPlaylist(prevPlaylist => ({
      ...prevPlaylist,
      tracks: prevPlaylist.tracks.filter(existingTrack => existingTrack.id !== track.id)
    }));
  };

  // Method to update the playlist name
  const updatePlaylistName = (newName) => {
    setPlaylist((prevPlaylist) => ({
      ...prevPlaylist,
      name: newName,
    }));
  };

  const savePlaylist = async () => {
    // Extract URIs from the playlist tracks
    const trackUris = playlist.tracks.map((track) => track.uri);

    try {
      await Spotify.savePlaylist(playlist.name, trackUris);
      setPlaylist({ name: 'New Playlist', tracks: [] });
      alert('Playlist saved to Spotify!');
    } catch (error) {
      console.error('Error saving playlist:', error);
    }

    console.log(`Saving playlist "${playlist.name}" with URIs:`, trackUris);

    // Mock saving to Spotify and resetting the playlist
    setPlaylist({
      name: 'New Playlist',
      tracks: [],
    });

    alert('Your playlist has been saved!');
  };

  return (
    <div className="App">
      <h1>Jammming</h1>
      <SearchBar />
      <div className="App-content">
        <SearchResults searchResults={searchResults} addTrackToPlaylist={addTrackToPlaylist} />
        <Playlist playlist={playlist} removeTrackFromPlaylist={removeTrackFromPlaylist} />
      </div>
    </div>
  );
}

export default App;
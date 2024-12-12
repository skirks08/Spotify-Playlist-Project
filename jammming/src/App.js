import React from 'react';
import { SearchBar } from './SearchBar';
import { SearchResults } from './SearchResults';
import { Playlist } from './Playlist';
import './App.css';

function App() {
// Hardcoded playlist data for testing

  const [playlist, setPlaylist] = useState ([
    name: 'My Playlist',
    tracks: [
      { id: 1, name: 'Track 1', artist: 'Artist 1', album: 'Album 1' },
      { id: 2, name: 'Track 2', artist: 'Artist 2', album: 'Album 2' },
      { id: 3, name: 'Track 3', artist: 'Artist 3', album: 'Album 3' },
    ]
  ]);

  return (
    <div className="App">
      <h1>Jammming</h1>
      <SearchBar />
      <div className="App-content">
        <SearchResults tracks={tracks} />
        <Playlist tracks={tracks} playlist={playlist} setPlaylist={setPlaylist}/>
      </div>
    </div>
  );
}

export default App;
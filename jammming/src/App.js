import React from 'react';
import { SearchBar } from './SearchBar';
import { SearchResults } from './SearchResults';
import { Playlist } from './Playlist';
import './App.css';

function App() {
// Hardcoded array of track objects
  const [tracks] = useState ([
    { id: 1, name: 'Track 1', artist: 'Artist 1', album: 'Album 1' },
    { id: 2, name: 'Track 2', artist: 'Artist 2', album: 'Album 2' },
    { id: 3, name: 'Track 3', artist: 'Artist 3', album: 'Album 3' },
    { id: 4, name: 'Track 4', artist: 'Artist 4', album: 'Album 4' },
  ]);

  return (
    <div className="App">
      <h1>Jammming</h1>
      <SearchBar />
      <div className="App-content">
        <SearchResults tracks={tracks} />
        <Playlist tracks={tracks} />
      </div>
    </div>
  );
}

export default App;
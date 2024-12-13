import React from 'react';
import { Tracklist } from './Tracklist';
import './Playlist.css';

export function Playlist({ playlist, updatePlaylistName, savePlaylist }) {

  const handleNameChange = (event) => {
    updatePlaylistName(event.target.value);
  };

  return (
    <div className="Playlist">
      <input
        className="Playlist-name"
        value={playlist.name}
        onChange={handleNameChange}
      />
      <Tracklist tracks={playlist.tracks} />
      <button className="SaveButton" onClick={savePlaylist}>
        Save To Spotify
      </button>
    </div>
  );
}
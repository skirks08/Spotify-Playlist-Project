import React from 'react';
import { Tracklist } from './Tracklist';
import './Playlist.css';

export function Playlist({ playlist, updatePlaylistName }) {

  const handleNameChange = (event) => {
    updatePlaylistName(event.target.value);
  };

  return (
    <div className="Playlist">
      {/* Editable input for the playlist name */}
      <input
        className="Playlist-name"
        value={playlist.name}
        onChange={handleNameChange}
      />
      <Tracklist tracks={playlist.tracks} />
      <button className="SaveButton">Save To Spotify</button>
    </div>
  );
}
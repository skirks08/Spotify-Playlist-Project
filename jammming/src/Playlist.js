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
};

export function Tracklist ({ tracks, action }) {
  return (
    <div className="Tracklist">
      {tracks.map((track) => (
        <div className="Track" key={track.id}>
          <div className="Track-information">
            <h3>{track.name}</h3>
            <p>{track.artist} | {track.album}</p>
          </div>
          {action && (
            <button className="Track-action" onClick={() => action(track)}>
              {action.label}
            </button>
          )}
        </div>
      ))}
    </div>
  );
};
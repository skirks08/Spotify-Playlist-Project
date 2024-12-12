import React from 'react';
import { Tracklist } from './Tracklist';
import './Playlist.css';

export function Playlist({ playlist, setPlaylist }) {

  const [playlistName, setPlaylistName] = useState(playlist.name);

  const handleNameChange = (e) => {
    setPlaylistName(e.target.value);
    setPlaylist({
        ...playlist,
        name: e.target.value,
    });
  };

  return (
    <div className="Playlist">
      <input value={playlistName} onChange={handleNameChange} />
      <Tracklist tracks={playlist.tracks} />
      <button className="SaveButton">Save To Spotify</button>
    </div>
  );
}
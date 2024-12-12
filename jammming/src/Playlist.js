import React from 'react';
import { Tracklist } from './Tracklist';
import './Playlist.css';

export function Playlist({ playlist, removeTrackFromPlaylist }) {

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
      <input value={playlist.name} readOnly />
      <Tracklist tracks={playlist.tracks} removeTrackFromPlaylist={removeTrackFromPlaylist} />
      <button className="SaveButton">Save To Spotify</button>
    </div>
  );
}
import React from 'react';
import { Tracklist } from './Tracklist';
import './Playlist.css';

export function Playlist({ tracks }) {
  return (
    <div className="Playlist">
      <input defaultValue="New Playlist" />
      <Tracklist tracks={tracks} />
      <button className="SaveButton">Save To Spotify</button>
    </div>
  );
}
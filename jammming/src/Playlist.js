import React from 'react';
import { Tracklist } from './Tracklist';
import './Playlist.css';

export function Playlist() {
  return (
    <div className="Playlist">
      <input defaultValue="New Playlist" />
      <Tracklist />
      <button className="SaveButton">Save To Spotify</button>
    </div>
  );
}
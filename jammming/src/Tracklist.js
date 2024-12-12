import React from 'react';
import { Track } from './Track';
import './Tracklist.css';

export function Tracklist() {
  return (
    <div className="Tracklist">
      <Track />
      <Track />
      <Track />
    </div>
  );
}
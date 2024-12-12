import React from 'react';
import './Track.css';

export function Track() {
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>Track Name</h3>
        <p>Artist Name | Album Name</p>
      </div>
      <button className="Track-action">+</button>
    </div>
  );
}
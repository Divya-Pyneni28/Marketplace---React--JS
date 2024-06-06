// SmallArtist.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './SmallArtist.css';

const SmallArtist = ({ name, image }) => {
  return (
    <div className="small-artist-container">
      <img src={image} alt={name} className="small-artist-image" />
      <div className="small-artist-info">
        <p className="artist-label">Artist</p>
        <p className="small-artist-name">{name}</p>
      </div>
    </div>
  );
};

SmallArtist.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default SmallArtist;

import React from 'react';
import PropTypes from 'prop-types';
import './Artist.css';

const Artist = ({ name, image }) => {
  return (
    <div className="artist-container">
      <img src={image} alt={name} className="artist-image" />
      <div className="artist-info">
        <p className="artist-label">Artist</p>
        <p className="artist-name">{name}</p>
      </div>
    </div>
  );
};

Artist.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Artist;

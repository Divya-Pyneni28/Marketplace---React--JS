import React from 'react';
import './Trending.css';
import Artist from '../Artist/Artist';

const Trending = () => {
  return (
    <div className="trending-container">
      <div className="text-content">
        <div className="labell">
          <label className="labell-text">Trending Now</label>
        </div>
        <p className="colection">Night Sky Collection</p>
        <h1 className="title">With the Stars</h1>
      </div>
      <div className="artist-content">
        <Artist name="Léa Jacquot" image="./images/Artist1.png" />
      </div>
      <div className="image-content">
        <img src="./images/Stars.png" alt="Right Side" className="right-image" />
      </div>
      <div className='buttons'>
      <button className='buy'>Buy</button>
      <button className='see'>See collection</button>
      </div>
      
    </div>
  );
};

export default Trending;

import React from 'react';
import './Collection.css';
import Artist from'../Artist/Artist'
import { Link } from 'react-router-dom';
import SmallArtist from '../Artist/SmallArtist';

const Collection = () => {
  return (
    <div>
      <h2 className='heading'>Collections</h2>
    <div className="collection-section">
      <div className="collection-card">
        <img src="./images/collection1.png" alt="Collection 1" className="collection-image" />
        <Link to="/collections">
            <button className="btn go-to-collection-btn">Go to Collection{"-->"}</button>
        </Link>
        <h2 className="collection-title">Night Sky</h2>
        <span className="collection-label">120 NTF</span>
        <p className="price">Price Range: 0.12BTC - 0.18BTC</p>
        <p className="description">Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor...</p>
        <SmallArtist name="Léa Jacquot"  image="./images/Artist1.png" />
      </div>
      
      <div className="collection-card">
        <img src="./images/collection2.png" alt="Collection 2" className="collection-image" />
        <h2 className="collection-title">Future</h2>
        <span className="collection-label">120 NTF</span>
        <p className="price">Price Range: 0.12BTC - 0.18BTC</p>
        <p className="description">Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor...</p>
        <SmallArtist name="Julien"  image="./images/Artist2.jpg" />
      </div>
      
      <div className="collection-card">
        <img src="./images/collection3.jpg" alt="Collection 3" className="collection-image" />
        <h2 className="collection-title">Mothernature</h2>
        <span className="collection-label">120 NTF</span>
        <p className="price">Price Range: 0.12BTC - 0.18BTC</p>
        <p className="description">Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempor...</p>
        <SmallArtist name="Maria" image="./images/Artist3.jpg" />
      </div>
    </div>
    </div>
  );
};

export default Collection;

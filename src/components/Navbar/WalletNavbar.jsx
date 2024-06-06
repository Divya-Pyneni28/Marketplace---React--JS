// src/components/Navbar/WalletNavbar.jsx
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import './WalletNavbar.css';
import { NFTContext } from '../Collection/CollectionsPage';

const WalletNavbar = () => {
  const [showWalletDetails, setShowWalletDetails] = useState(false);
  const purchasedNFTs = useContext(NFTContext) ?? [];


  const toggleWalletDetails = () => {
    setShowWalletDetails(!showWalletDetails);
  };

  return (
    <nav>
      <a href="#" className="logo">MARKETPLACE</a>
      <button className="account" onClick={toggleWalletDetails}>Account</button>
      {showWalletDetails && (
        <div className="wallet-details-box">
          <img src="./images/wallet image.png" alt="Wallet" className="wallet-image" />
          <span className="arrow-symbol">{"->"}</span>
          <div className="text">
            <p className="small-text">In your wallet</p>
            <h1 className="big-text">0.129 BTC</h1>
          </div>
          <h2 className="main-text">Your NFTs</h2>
          {purchasedNFTs.length === 0 ? (
            <p className="desc">You don’t own any NFTs yet</p>
          ) : (
            <div className="nft-list">
              {purchasedNFTs.map((nft) => (
                <div key={nft.id} className="nft-item">
                  <img src={nft.image} alt={nft.title} className="nft-image" />
                </div>
              ))}
            </div>
          )}
          <div className='btn-container'>
            <Link to="/" className='start-shipping'>Start Shopping</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default WalletNavbar;

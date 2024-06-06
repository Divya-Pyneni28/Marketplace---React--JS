// src/components/ConnectWallet/ConnectWallet.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './ConnectWallet.css';

const ConnectWallet = ({ setIsConnected }) => {
  const navigate = useNavigate();

  const handleBoxClick = () => {
    setIsConnected(true); // Update connection status
    navigate('/wallet');
  };

  return (
    <div className="connect-wallet-page">
      <Navbar />
      <div className="connect-wallet-content">
        <h3 className="title">Choose the wallet to connect</h3>
        <div className="boxes">
          <div className="box box1" onClick={handleBoxClick}>
          </div>
          <div className="box box2" onClick={handleBoxClick}>
          </div>
          <div className="box box3" onClick={handleBoxClick}>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;

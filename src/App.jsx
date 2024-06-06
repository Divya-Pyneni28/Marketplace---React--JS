// src/components/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Collection from './components/Collection/Collection';
import Trending from './components/Trending/Trending';
import Footer from './components/Footer/Footer';
import ConnectWallet from './components/ConnectWallet/ConnectWallet';
import WalletNavbar from './components/Navbar/WalletNavbar';
import RectanglesRow from './components/Header/RectanglesRow'
import CollectionsPage from './components/Collection/CollectionsPage';

const App = () => {
  const [isConnected, setIsConnected] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/connect-wallet" element={<ConnectWalletLayout setIsConnected={setIsConnected} />} />
        <Route path="/wallet" element={<Wallet isConnected={isConnected} />} />
        <Route path="/collections" element={<CollectionsPage isConnected={isConnected} />} /> 
      </Routes>
    </Router>
  );
};

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Trending />
      <Collection />
      <Footer />
    </div>
  );
};

const ConnectWalletLayout = ({ setIsConnected }) => {
  return (
    <div>
      <ConnectWallet setIsConnected={setIsConnected} />
    </div>
  );
};

const Wallet = ({ isConnected }) => {
  return (
    <div>  
      {isConnected ? <WalletNavbar /> : <Navbar />}
      <RectanglesRow />
      <Trending />
      <Collection />
      <Footer />
    </div>
  );
};

export default App;

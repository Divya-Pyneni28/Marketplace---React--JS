// src/components/CollectionsPage/CollectionsPage.jsx
import React, { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './CollectionsPage.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Artist from '../Artist/Artist';
import WalletNavbar from '../Navbar/WalletNavbar';

export const NFTContext = createContext();

const CollectionsPage = ({isConnected}) => {
  const [collections, setCollections] = useState([]);
  const [purchasedNFTs, setPurchasedNFTs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCollections = async () => {
      const data = [
        { id: 1, title: "Night is coming", price: "0.12 BTC", image: "./images/image1.png" },
        { id: 2, title: "With the stars", price: "0.12 BTC", image: "./images/image2.png" },
        { id: 3, title: "Summer", price: "0.12 BTC", image: "./images/image3.png" },
        { id: 4, title: "Quiet", price: "0.14 BTC", image: "./images/image4.png" },
        { id: 5, title: "Travel", price: "0.12 BTC", image: "./images/image5.png" },
        { id: 6, title: "The rain", price: "0.18 BTC", image: "./images/image6.png" }
      ];
      setCollections(data);
    };

    fetchCollections();
  }, []);

  const handleBuyClick = (collection) => {
    if (isConnected) {
      setPurchasedNFTs((prevNFTs) => [...prevNFTs, collection]);
    } else {
      navigate('/connect-wallet');
    }
  };

  const renderCollectionCards = () => {
    return collections.map((collection, index) => (
      <div key={collection.id} className="collection-crd">
        <img src={collection.image} alt={collection.title} className="collection-imge" />
        {index === 1 && (
          <button className="buy-buton" onClick={() => handleBuyClick(collection)}>Buy{"->"}</button>
        )}
        <h2 className="collection-tile">{collection.title}</h2>
        <span className="collection-prce">{collection.price}</span>
      </div>
    ));
  };

  const purchasedNFTsEmpty = purchasedNFTs.length === 0;

  return (
    <NFTContext.Provider value={purchasedNFTs}>
      <div className='collections-page-container'>
      {isConnected ? <WalletNavbar /> : <Navbar />}
        <div className="begin-info">
          <div className="text-content">
            <div className="label">
              <label className="label-text">Trending Now</label>
            </div>
            <p className="collection">Collection</p>
            <h1 className="tile">Night Sky</h1>
            <p className='des'>
              Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, consectetur adicing elit, sed do eiusmod tempo
            </p>
          </div>
          <div className="artst-content">
            <Artist name="Léa Jacquot" image="./images/Artist1.png" />
          </div>
          <div className="image-content">
            <img src="./images/Stars.png" alt="Right Side" className="right-image" />
          </div>
          <h4 className='nft-title'>NFTs</h4>
        </div>
        <div className="collection-grid">
          {renderCollectionCards()}
        </div>
        <Footer />
      </div>
    </NFTContext.Provider>
  );
};

export default CollectionsPage;

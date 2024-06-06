import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-image">
        <img src="./images/image 9.png" alt="Footer Image" />
      </div>
      <div className="social-media-icons">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="./images/FACEBOOK.png" alt="Facebook" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src="./images/TWITTER.png" alt="Twitter" />
        </a>
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
          <img src="./images/DISCORD.png" alt="Discord" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="./images/Path 19.png" alt="Instagram" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <a href="#" className="logo">MARKETPLACE</a>
      <Link to="/connect-wallet">
        <button className="connect-to-wallet">Connect wallet</button>
      </Link>
    </nav>
  );
}

export default Navbar;

// src/components/Navbar.jsx
import React from 'react';
import './NavBar.css';
import logo from '../assets/cropped-Logo-e1662790239183.png';

function Navbar() {
  return (
    <nav className="navbar">
      <img id='logo' src={logo} alt="HEI logo" />
      <ul className="nav-links">
        <li><a href="#">ACCUEIL</a></li>
        <li><a href="#">ACTUALITÉS</a></li>
        <li><a href="#">BOURSE D'ÉTUDES</a></li>
        <li><a href="#">INSCRIPTION</a></li>
        <li><button className="intranet-btn">INTRANET</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;

import React from "react";
import { Link } from 'react-router-dom'; 
import './header.css';
import logo from './assets/logo.png';
import secondaryImage from './assets/secondaryImage.png'; 


const Header = () => {
  return (
    <header className="header">
    <div className="header-top">
      <Link to="/" className="header-title-wrapper">
          <img src={logo} alt="YNote Logo" className="header-logo" />
          <img src={secondaryImage} alt="Secondary Image" className="header-secondary-image" /> 
        </Link>
      </div>
    </header>
  );
};

export default Header;
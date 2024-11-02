import React from "react";
import { Link } from 'react-router-dom'; 
import './header.css';
import logo from './assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header-top">
        <div className="header-title-wrapper">
          <img src={logo} alt="50 Shades of Brown Logo" className="header-logo" />
          <h1 className="header-title">50 Pages</h1>
        </div>
      </Link>
      <p className="header-description">A placeholder for the note-sharing platform</p>
    </header>
  );
};

export default Header;
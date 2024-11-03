import React from 'react';
import './landing.css';
import logo from './assets/logo.png';
import secondaryImage from './assets/secondaryImage.png'; 

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="logo-container">
        <img src={logo} alt="Primary Logo" className="primary-logo" />
        <img src={secondaryImage} alt="Secondary Logo" className="secondary-logo" />
      </div>
      <p className="description">
        Welcome to York Note! The easiest way to share and discover notes with your classmates.
      </p>
      <button className="login-button" onClick={() => window.location.href = '/login'}>
        Login
      </button>
    </div>
  );
};

export default LandingPage;

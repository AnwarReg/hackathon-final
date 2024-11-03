import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} | Team "50 Shades of Brown"</p>
    </footer>
  );
};

export default Footer;
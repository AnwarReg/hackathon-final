import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import logo from './assets/logo.png';
import secondaryImage from './assets/secondaryImage.png'; 
import { Link } from "react-router-dom";

const Login = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <div className="landing-page">
          <div className="logo-container">
            <img src={logo} alt="Primary Logo" className="primary-logo" />
            <img src={secondaryImage} alt="Secondary Logo" className="secondary-logo" />
          </div>
          <p className="description">
            Welcome to York Note! The easiest way to share and discover notes with your classmates.
          </p>
          <button onClick={() => loginWithRedirect()}>Log In</button>;
          
        </div>
      );

};

export default Login

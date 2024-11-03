import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import logo from './assets/logo.png';
import secondaryImage from './assets/secondaryImage.png'; 
import './login.css';

const Login = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <div className="landing-page">
            <div className="logo-container">
                <img src={logo} alt="Primary Logo" className="primary-logo" />
                <img src={secondaryImage} alt="Secondary Logo" className="secondary-logo" />
            </div>
            <p className="description">
                Gathering York Students one note at a time.
            </p>
            <div>
                York Note is a localized note sharing app for all York College students to share and access notes from their classmates. Our goal is to help York students achieve their highest academic potential and build a strong and active community.
            </div>
            <div>Log In and be a part of York Notes Family</div>
            <button onClick={() => loginWithRedirect()}>Log In</button>
        </div>
    );
};

export default Login;

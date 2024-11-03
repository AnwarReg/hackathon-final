import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-qe6nwvk4gjkfzui7.us.auth0.com"
    clientId="jw7KgbhZcoAAgTAwn8IHZ9PM6AwVKB6O"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
  <StrictMode>
    <App />
  </StrictMode>
  </Auth0Provider>,
)
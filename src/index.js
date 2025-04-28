import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { ClerkProvider } from '@clerk/clerk-react'
const PUBLISHABLE_KEY = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

ReactDOM.render(

<React.StrictMode>
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <App />
  </ClerkProvider> 
</React.StrictMode>,
document.getElementById('root'));

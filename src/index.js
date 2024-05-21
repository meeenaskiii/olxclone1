import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { FirebaseContext } from './store/FirebaseContext';
import firebase from './firebase/config';

// Create a root
const container = document.getElementById('root');
const root = createRoot(container);

// Render your application
root.render(
  <FirebaseContext.Provider value={firebase}>
    <App />
  </FirebaseContext.Provider>
);

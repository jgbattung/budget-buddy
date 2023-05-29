import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import firebase from 'firebase/app';
import { firebaseConfig } from './firebaseConfig';
import 'firebase/auth';

firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
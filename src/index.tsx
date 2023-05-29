import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { firebaseConfig } from './config/firebaseConfig';
import 'firebase/auth';
import { initializeApp } from "firebase/app";

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
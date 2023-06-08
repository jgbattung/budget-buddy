import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { firebaseConfig } from './config/firebaseConfig';
import 'firebase/auth';
import { initializeApp } from "firebase/app";

const app = initializeApp(firebaseConfig);

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);
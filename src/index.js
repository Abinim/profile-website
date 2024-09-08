import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot from 'react-dom/client'
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root using createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

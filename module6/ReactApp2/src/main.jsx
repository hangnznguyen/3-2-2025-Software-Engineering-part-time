// main.jsx or index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // make sure the path is correct
import './index.css'; // optional

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

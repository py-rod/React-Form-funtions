import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from "./components/Navbar/Navbar.jsx"


const headerRoot = ReactDOM.createRoot(document.getElementById('header-root'));
headerRoot.render(
  <React.StrictMode>
    <Navbar/>
  </React.StrictMode>
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import App from './App.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS for scroll animations
AOS.init({ once: true, duration: 800 });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

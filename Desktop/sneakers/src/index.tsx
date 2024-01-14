import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router, Routes, Link, BrowserRouter } from 'react-router-dom';
import App from './App'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


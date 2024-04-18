import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GTContext from './Context/GTContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GTContext>
    <App />
  </GTContext>
);



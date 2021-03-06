import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import 'nprogress/nprogress.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Add Bootstrap 
import 'bootstrap/dist/css/bootstrap.css';

// Loader css
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './site/App';
import Searchtheme from './site/Searchtheme';
import reportWebVitals from './reportWebVitals';
import Main from './site/Main';
import Mypage from './site/Mypage';
import Login from './site/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />

  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './index.css';
import App from './app/App';
import { Auth0Provider } from "@auth0/auth0-react";
import Footer from './app/components/UI/Footer'
import Navbar from './app/components/UI/Navbar'

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
   
      <App />
    
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);



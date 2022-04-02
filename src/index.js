import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Component from "./mainComp"
// import Component from "./navbarItem"
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter} from "react-router-dom"
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> <Component /></BrowserRouter>   
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();

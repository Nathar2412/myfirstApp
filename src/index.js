import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter, Route, Routes } from "react-router-dom";

// import {Component1,Component2} from './ListofComponents'

import reportWebVitals from './reportWebVitals';
import { About } from './Components/About';
import { Home } from './Components/Home';
import { Profile } from './Components/Profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<App />} />

        <Route path="/about" element={<About />} />
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
      {/* <App /> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

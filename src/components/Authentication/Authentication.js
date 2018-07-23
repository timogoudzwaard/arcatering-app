import React from 'react';

// Components
import Login from './Login/Login';
import Register from './Register/Register';
import Hero from '../Homepage/Hero/Hero';

// Style
import './Authentication.css';

const Authentication = () => (
  <div className="authentication box">
    <Hero />

    <Login />
    <Register />
  </div>
);

export default Authentication;

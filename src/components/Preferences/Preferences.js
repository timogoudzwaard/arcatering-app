import React from 'react';

// Components
import Drinks from './Drinks/Drinks';
import Food from './Food/Food';

// Style
import './Preferences.css';

const Preferences = () => (
  <div className="food">
    <Food />
    <Drinks />
  </div>
);

export default Preferences;

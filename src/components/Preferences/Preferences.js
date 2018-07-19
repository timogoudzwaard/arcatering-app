import React from 'react';

// Components
import Drinks from './Drinks/Drinks';
import Food from './Food/Food';
import { ActionButton } from '../common';

// Style
import './Preferences.css';

const Preferences = () => (
  <div className="food">
    <Food />
    <Drinks />

    <div className="food-button">
      <ActionButton>
        Save
      </ActionButton>
    </div>
  </div>
);

export default Preferences;

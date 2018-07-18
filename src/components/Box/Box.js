import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Menu from '../Menu/Menu';
import Preferences from '../Preferences/Preferences';
import HomePage from '../Homepage/Homepage';

// Style
import './Box.css';

const Box = () => (
  <div className="box">
    <Switch>
      <Route path="/preferences" component={Preferences} />
      <Route path="/" component={HomePage} />
    </Switch>
    <Menu />
  </div>
);

export default Box;

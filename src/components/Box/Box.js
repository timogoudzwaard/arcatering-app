import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Menu from '../Menu/Menu';
import Preferences from '../Preferences/Preferences';
import HomePage from '../Homepage/Homepage';
import Settings from '../Settings/Settings';

// Style
import './Box.css';

const Box = () => (
  <div className="box">
    <Switch>
      <Route path="/preferences" component={Preferences} />
      <Route path="/settings" component={Settings} />
      <Route path="/" component={HomePage} />
    </Switch>
    <Menu />
  </div>
);

export default Box;

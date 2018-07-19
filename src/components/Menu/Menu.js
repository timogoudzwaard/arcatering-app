import React from 'react';

// Components
import MenuItem from './MenuItem/MenuItem';

// Style
import './Menu.css';

const Menu = () => (
  <div className="menu">
    <MenuItem icon="home" url="/" />
    <MenuItem icon="fastfood" url="/preferences" />
  </div>
);

export default Menu;

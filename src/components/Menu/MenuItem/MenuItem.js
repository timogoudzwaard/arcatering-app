import React from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';

// Style
import './MenuItem.css';

const MenuItem = ({ icon, url }) => (
  <Link to={url} className="menu-item">
    <i className="material-icons">
      {icon}
    </i>
  </Link>
);

MenuItem.propTypes = {
  icon: string.isRequired,
  url: string.isRequired,
};

export default MenuItem;

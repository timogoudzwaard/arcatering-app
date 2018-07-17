import React from 'react';
import { node, string } from 'prop-types';
import { Link } from 'react-router-dom';

// Style
import './Button.css';

const Button = ({ children, url }) => (
  <Link to={url} className="button">
    {children}
  </Link>
);

Button.propTypes = {
  children: node,
  url: string,
};

Button.defaultProps = {
  children: 'Click me',
  url: '#',
};

export default Button;

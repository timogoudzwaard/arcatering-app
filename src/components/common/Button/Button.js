import React from 'react';
import { node, string } from 'prop-types';
import { Link } from 'react-router-dom';

// Style
import './Button.css';

const Button = ({ children, url }) => (
  <div>
    <Link to={url} className="button">
      {children}
    </Link>
  </div>
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

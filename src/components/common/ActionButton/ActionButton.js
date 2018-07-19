import React from 'react';
import { node } from 'prop-types';

const ActionButton = ({ children }) => (
  <div>
    <input type="submit" className="button" value={children} />
  </div>
);

ActionButton.propTypes = {
  children: node,
};

ActionButton.defaultProps = {
  children: 'Click me',
};

export default ActionButton;

import React from 'react';
import { node, func } from 'prop-types';

// Style
import './ActionButton.css';

const ActionButton = ({ children, submit }) => (
  <div>
    <button type="submit" className="button action-button" value={children} onClick={submit}>
      {children}
    </button>
  </div>
);

ActionButton.propTypes = {
  children: node,
  submit: func,
};

ActionButton.defaultProps = {
  children: 'Click me',
  submit: () => null,
};

export default ActionButton;

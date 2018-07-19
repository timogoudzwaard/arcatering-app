import React from 'react';
import { string, bool, func } from 'prop-types';

const CheckBox = ({ name, checked, onChange }) => (
  <div>
    <input
      type="checkbox"
      name={name}
      checked={checked}
      onChange={onChange}
    />
    {name}
  </div>
);

CheckBox.propTypes = {
  name: string.isRequired,
  checked: bool,
  onChange: func,
};

CheckBox.defaultProps = {
  checked: false,
  onChange: null,
};

export default CheckBox;

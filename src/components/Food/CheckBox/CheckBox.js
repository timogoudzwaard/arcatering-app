import React from 'react';
import { string } from 'prop-types';

const CheckBox = ({ name }) => (
  <div>
    <input
      type="checkbox"
      name={name}
    />
    {name}
  </div>
);

CheckBox.propTypes = {
  name: string.isRequired,
};

export default CheckBox;

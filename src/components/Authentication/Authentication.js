import React from 'react';
import { func } from 'prop-types';
import { Field, reduxForm } from 'redux-form';

const Authentication = ({ handleSubmit }) => (
  <div className="authentication box">
    <form onSubmit={handleSubmit}>

      <div>
        <label htmlFor="username">
          Username
          <Field
            name="username"
            component="input"
            type="text"
            placeholder="Username"
          />
        </label>
      </div>

      <div>
        <button type="submit">
          Submit
        </button>
      </div>

    </form>
  </div>
);

Authentication.propTypes = {
  handleSubmit: func.isRequired,
};

export default reduxForm({ form: 'login' })(Authentication);

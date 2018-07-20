import React, { Component } from 'react';
import { func } from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import firebase from 'firebase';

// Components
import { Card } from '../../common';

// Style
import './Register.css';

class Authentication extends Component {
  static onSubmit({ email, password }) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
      // Handle Errors here.
      const { code } = error;
      const { message } = error;
      console.log(code, message);
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <Card cardTitle="Register new account">
        <form onSubmit={handleSubmit(data => (Authentication.onSubmit(data)))}>

          <div>
            <label htmlFor="email">
              <Field
                name="email"
                component="input"
                type="text"
                placeholder="email"
              />
            </label>
          </div>

          <div>
            <label htmlFor="password">
              <Field
                name="password"
                component="input"
                type="password"
                placeholder="password"
              />
            </label>
          </div>

          <div>
            <button type="submit" className="button register-button">
              Register
            </button>
          </div>

        </form>
      </Card>
    );
  }
}

Authentication.propTypes = {
  handleSubmit: func.isRequired,
};

export default reduxForm({
  form: 'register',
  fields: ['email', 'password'],
})(Authentication);

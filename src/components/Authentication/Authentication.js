import React, { Component } from 'react';
import { func } from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import firebase from 'firebase';

// Components
import { Card } from '../common';
import Register from './Register/Register';
import Hero from '../Homepage/Hero/Hero';

// Style
import './Authentication.css';

class Authentication extends Component {
  static onSubmit({ email, password }) {
    firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
      // Handle Errors here.
      const { code } = error;
      const { message } = error;
      console.log(code, message);
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="authentication box">
        <Hero />
        <Card cardTitle="Log in">
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
              <button type="submit" className="button">
                Log in
              </button>
            </div>

          </form>
        </Card>

        <Register />
      </div>
    );
  }
}

Authentication.propTypes = {
  handleSubmit: func.isRequired,
};

export default reduxForm({
  form: 'login',
  fields: ['email', 'password'],
})(Authentication);

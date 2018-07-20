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
  constructor(props) {
    super(props);

    this.state = { error: null };
    this.renderError = this.renderError.bind(this);
  }

  onSubmit({ email, password }) {
    firebase.auth().signInWithEmailAndPassword(email, password).catch(({ code }) => {
      // Handle Errors here.
      this.setState({ error: code });
    });
  }

  renderError() {
    const { error } = this.state;

    switch (error) {
      default:
        return '';
      case 'auth/invalid-email':
        return 'invalid email';
      case 'auth/wrong-password':
        return 'wrong password';
      case 'auth/user-not-found':
        return 'unknown email';
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="authentication box">
        <Hero />
        <Card cardTitle="Log in">
          <form onSubmit={handleSubmit(data => (this.onSubmit(data)))}>

            <div>
              <label htmlFor="email">
                <Field
                  name="email"
                  component="input"
                  type="email"
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

            <div className="auth-error">
              {this.renderError()}
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

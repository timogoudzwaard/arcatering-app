import React, { Component } from 'react';
import { func } from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import firebase from 'firebase';

// Components
import { Card } from '../../common';

// Style
import './Register.css';

class Authentication extends Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
    this.renderError = this.renderError.bind(this);
  }

  onSubmit({ email, password }) {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(({ code }) => {
      // Handle Errors here.
      console.log(code);
      this.setState({ error: code });
    });
  }

  renderError() {
    const { error } = this.state;

    switch (error) {
      default:
        return '';
      case 'auth/weak-password':
        return 'Weak password, try a stronger one';
      case 'auth/email-already-in-use':
        return 'That email is already in use';
    }
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <Card cardTitle="Register new account">
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

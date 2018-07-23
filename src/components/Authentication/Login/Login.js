import React, { Component } from 'react';
import { func } from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import firebase from 'firebase';

// Components
import { Card } from '../../common';

// reduxForm
import { renderField, required } from '../RenderField/RenderField';

class Login extends Component {
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
        return 'Invalid email address, please review the information you entered';
      case 'auth/wrong-password':
        return 'Incorrect email and password combination';
      case 'auth/user-not-found':
        return 'That email address is not registered. Please sign up or enter a different email address';
      case 'auth/user-disabled':
        return 'Your account has been disabled.';
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <Card cardTitle="Log in">
        <form onSubmit={handleSubmit(data => (this.onSubmit(data)))}>

          <div>
            <label htmlFor="email">
              <Field
                name="email"
                type="email"
                label="email"
                component={renderField}
                validate={required}
              />
            </label>
          </div>

          <div>
            <label htmlFor="password">
              <Field
                name="password"
                component={renderField}
                validate={required}
                type="password"
                label="password"
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
    );
  }
}

Login.propTypes = {
  handleSubmit: func.isRequired,
};

export default reduxForm({
  form: 'login',
  fields: ['email', 'password'],
})(Login);

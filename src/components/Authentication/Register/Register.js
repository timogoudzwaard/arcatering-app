import React, { Component } from 'react';
import { func } from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import firebase from 'firebase';

// Components
import { Card, LoadingIndicator } from '../../common';

// Style
import './Register.css';

// reduxForm
import { renderField, required } from '../RenderField/RenderField';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = { error: null, loading: false };

    this.renderError = this.renderError.bind(this);
  }

  onSubmit({ email, password }) {
    this.setState({ loading: true });

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(({ code }) => {
        // Handle Errors here.
        this.setState({ error: code });
      })
      .then(() => {
        this.setState({ loading: false });
      });
  }

  onLoading() {
    const { loading } = this.state;

    if (loading) {
      return <LoadingIndicator />;
    }

    return (
      <button type="submit" className="button register-button">
        Register
      </button>
    );
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
      case 'auth/invalid-email':
        return 'Invalid email address, please review the information you entered';
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
                component={renderField}
                validate={required}
                type="email"
                label="email"
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

          <div className="center-button">
            {this.onLoading()}
          </div>

        </form>
      </Card>
    );
  }
}

Register.propTypes = {
  handleSubmit: func.isRequired,
};

export default reduxForm({
  form: 'register',
  fields: ['email', 'password'],
})(Register);

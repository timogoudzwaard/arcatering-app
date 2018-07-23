// Copied from Redux Form website (https://redux-form.com/6.6.2/examples/)
import React from 'react';

export const renderField = ({
  input, label, type, meta: { touched, error, warning }
}) => (
  <div>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span className="auth-error">{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

export const required = value => value ? undefined : 'Required';

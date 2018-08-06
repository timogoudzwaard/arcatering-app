import React from 'react';
import { mount } from 'enzyme';
import { Field } from 'redux-form';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Components
import Login from './Login';
import { Card, LoadingIndicator } from '../../common';

// Reducers
import reducers from '../../../reducers';

// Tests
let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Provider store={createStore(reducers, {})}>
      <Login />
    </Provider>,
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('renders without crashing', () => {
  expect(wrapped.length).toEqual(1);
});

it('renders one Card component', () => {
  expect(wrapped.find(Card).length).toEqual(1);
});

describe('redux form with loading set to false', () => {
  it('renders 2 Field components', () => {
    expect(wrapped.find(Field).length).toEqual(2);
  });

  it('renders a button', () => {
    expect(wrapped.find('button').length).toEqual(1);
  });

  it('does not render loading indicator', () => {
    expect(wrapped.find(LoadingIndicator).length).toEqual(0);
  });
});

describe('redux form with loading set to true', () => {
  beforeEach(() => {
    wrapped.setState({ loading: true });
    wrapped.update();
  });

  it('renders loading indicator', () => {
    expect(wrapped.find(LoadingIndicator).length).toEqual(1);
  });
});

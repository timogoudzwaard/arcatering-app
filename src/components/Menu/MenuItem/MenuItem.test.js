import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

// Components
import MenuItem from './MenuItem';

// Tests
let wrapped;

beforeEach(() => {
  wrapped = shallow(<MenuItem url="/" icon="test" />);
});

afterEach(() => {
  wrapped.unmount();
});

describe('MenuItem Component', () => {
  it('renders without crashing', () => {
    expect(wrapped.length).toEqual(1);
  });

  it('renders a route Link component', () => {
    expect(wrapped.find(Link).length).toEqual(1);
  });

  it('gives the correct "to" property to the Link component', () => {
    expect(wrapped.props().to).toEqual('/');
  });

  it('creates a "i" tag with the class "material-icons"', () => {
    expect(wrapped.props().children.type).toEqual('i');
    expect(wrapped.props().children.props.className).toEqual('material-icons');
  });
});

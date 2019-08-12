import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('App component', () => {
  const wrapper = shallow(<App />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

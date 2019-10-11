import React from 'react';
import { shallow } from 'enzyme';
import App from '../app.jsx';

describe('App component', () => {
  const wrapper = shallow(<App />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

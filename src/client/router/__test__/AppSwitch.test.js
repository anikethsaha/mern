import React from 'react';
import { shallow } from 'enzyme';
import AppSwitch from '../appSwitch.jsx';

describe('AppSwitch component', () => {
  const wrapper = shallow(<AppSwitch />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

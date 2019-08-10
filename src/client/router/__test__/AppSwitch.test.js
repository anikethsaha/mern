import React from 'react';
import { shallow } from 'enzyme';
import AppSwitch from '../AppSwitch';

describe('AppSwitch component', () => {
  const wrapper = shallow(<AppSwitch />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

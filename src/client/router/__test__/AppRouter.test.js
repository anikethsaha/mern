import React from 'react';
import { shallow } from 'enzyme';
import AppRouter from '../AppRouter';

describe('AppRouter component', () => {
  const wrapper = shallow(<AppRouter />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import AppRouter from '../appRouter.jsx';

describe('AppRouter component', () => {
  const wrapper = shallow(<AppRouter />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

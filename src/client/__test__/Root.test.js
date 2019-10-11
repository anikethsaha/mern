import React from 'react';
import { shallow } from 'enzyme';
import Root from '../root.jsx';

describe('Root component', () => {
  const wrapper = shallow(<Root />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

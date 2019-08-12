import React from 'react';
import { shallow } from 'enzyme';
import Hello from '../Hello';

describe('Hello component', () => {
  const wrapper = shallow(<Hello />);

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

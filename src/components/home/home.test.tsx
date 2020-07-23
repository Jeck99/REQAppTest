import * as React from 'react';
import { shallow } from '../custom-button/node_modules/enzyme';
import Home from './home';

describe('Sidebar', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});

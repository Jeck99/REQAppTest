import * as React from 'react';
import { shallow } from '../custom-button/node_modules/enzyme';
import ListView from './list-view';

describe('ListView', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<ListView />);
    expect(wrapper).toMatchSnapshot();
  });
});

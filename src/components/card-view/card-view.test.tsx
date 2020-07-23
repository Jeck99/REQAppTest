import * as React from 'react';
import { shallow } from '../custom-button/node_modules/enzyme';
import CardView from './card-view';

describe('CardView', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<CardView />);
    expect(wrapper).toMatchSnapshot();
  });
});

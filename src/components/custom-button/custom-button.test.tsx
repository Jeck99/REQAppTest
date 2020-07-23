import * as React from 'react';
import { shallow } from 'enzyme';
import CardButton from './custom-button';

describe('CardButton', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<CardButton />);
    expect(wrapper).toMatchSnapshot();
  });
});

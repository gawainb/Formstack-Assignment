import React from 'react';

import {
    configure,
    shallow
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import Search from './Search';

configure({
    adapter: new Adapter()
});

describe('<Search />', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<Search />);
        expect(wrapper).toMatchSnapshot();
    });
});
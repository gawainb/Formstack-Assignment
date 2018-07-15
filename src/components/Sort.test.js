import React from 'react';

import {
    configure,
    shallow
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import Sort from './Sort';

configure({
    adapter: new Adapter()
});

describe('<Sort />', () => {
    it('renders correctly', () => {
        const wrapper = shallow(<Sort />);
        expect(wrapper).toMatchSnapshot();
    });
});
import React from 'react';
import { shallow } from 'enzyme';

import Items from 'components/Items';

describe('Items', () => {
    const items = shallow(<Items />);

    it('should be like snapshot', () => {
        expect(items).toMatchSnapshot();
    });
});

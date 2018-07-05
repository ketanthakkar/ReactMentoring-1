import React from 'react';
import { shallow } from 'enzyme';

import Item from 'components/Item';

describe('Item', () => {
    const item = shallow(<Item />);

    it('should be like snapshot', () => {
        expect(item).toMatchSnapshot();
    });
});

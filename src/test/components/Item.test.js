import React from 'react';
import { shallow } from 'enzyme';

import Item from 'components/Item';

describe('Item', () => {
    const mockGetItem = jest.fn();
    const mockGetItemsByGenre = jest.fn();
    const item = shallow(
        <Item
            getItem={mockGetItem}
            getItemsByGenre={mockGetItemsByGenre}
        />
    );

    it('should be like snapshot', () => {
        expect(item).toMatchSnapshot();
    });

    it('should call getItem function on ItemImage click', () => {
        item.find('Item__ItemImage').simulate('click');
        expect(mockGetItem.mock.calls.length).toBe(1);
        expect(mockGetItemsByGenre.mock.calls.length).toBe(1);
    });
});

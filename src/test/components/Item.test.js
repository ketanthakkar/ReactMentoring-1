import React from 'react';
import { shallow } from 'enzyme';

import Item from 'components/Item';

describe('Item', () => {
    const mockOnItemClick = jest.fn();
    const item = shallow(<Item onItemClick={mockOnItemClick} />);

    it('should be like snapshot', () => {
        expect(item).toMatchSnapshot();
    });

    it('should call onItemClick function on ItemImage click', () => {
        item.find('Item__ItemImage').simulate('click');
        expect(mockOnItemClick.mock.calls.length).toBe(1);
    });
});

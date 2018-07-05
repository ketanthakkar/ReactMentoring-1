import React from 'react';
import { shallow } from 'enzyme';

import Details from 'components/Details';

describe('Details', () => {
    const mockGetItems = jest.fn();
    const details = shallow(<Details getItems={mockGetItems} />);

    it('should be like snapshot', () => {
        expect(details).toMatchSnapshot();
    });

    it('should call getItems function on DetailsSearchButton click', () => {
        details.find('Details__DetailsSearchButton').simulate('click');
        expect(mockGetItems.mock.calls.length).toBe(1);
    });
});

import React from 'react';
import { shallow } from 'enzyme';

import Details from 'components/Details';

describe('Details', () => {
    const mockGoToSearchPage = jest.fn();
    const details = shallow(<Details goToSearchPage={mockGoToSearchPage} />);

    it('should be like snapshot', () => {
        expect(details).toMatchSnapshot();
    });

    it('should call goToSearchPage function on DetailsSearchButton click', () => {
        details.find('Details__DetailsSearchButton').simulate('click');
        expect(mockGoToSearchPage.mock.calls.length).toBe(1);
    });
});
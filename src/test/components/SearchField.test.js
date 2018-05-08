import React from 'react';
import { shallow } from 'enzyme';

import SearchField from 'components/SearchField';

import SEARCH_BY from "constants/SEARCH_BY";

describe('SearchField', () => {
    const mockOnSearch = jest.fn();
    const searchField = shallow(<SearchField onSearch={mockOnSearch} />);

    it('should be like snapshot', () => {
        expect(searchField).toMatchSnapshot();
    });

    it('should call onSearch function on SearchButton click', () => {
        searchField.find('SearchField__SearchButton').simulate('click');
        expect(mockOnSearch.mock.calls.length).toBe(1);
    });

    it('should change state on SearchFilterButton searchByTitle click', () => {
        searchField.find('SearchField__SearchFilterButton').first().simulate('click');
        expect(searchField.state('searchBy')).toEqual(SEARCH_BY.TITLE);
    });

    it('should change state on SearchFilterButton searchByGenre click', () => {
        searchField.find('SearchField__SearchFilterButton').last().simulate('click');
        expect(searchField.state('searchBy')).toEqual(SEARCH_BY.GENRE);
    });
});

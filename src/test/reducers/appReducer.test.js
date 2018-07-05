import appReducer from 'reducers/appReducer';

import ACTION_TYPES from 'constants/ACTION_TYPES';
import APP_STATES from 'constants/APP_STATES';
import SEARCH_BY from 'constants/SEARCH_BY';
import SORT_BY from 'constants/SORT_BY';

describe('app reducer', () => {
    it('should return the initial state', () => {
        expect(appReducer(undefined, {})).toEqual(
            {
                appState: APP_STATES.SEARCH_PAGE,
                value: '',
                sortBy: SORT_BY.RELEASE_DATE,
                searchBy: SEARCH_BY.TITLE,
                items: [],
                item: {}
            }
        );
    });

    it('should handle GET_ITEMS_SUCCESS', () => {
        expect(
            appReducer({}, {
                type: ACTION_TYPES.GET_ITEMS_SUCCESS,
                data: ['items'],
                total: 0,
            })
        ).toEqual(
            {
                appState: APP_STATES.SEARCH_PAGE,
                items: ['items'],
                total: 0,
            }
        );
    });

    it('should handle GET_ITEM_SUCCESS', () => {
        expect(
            appReducer({}, {
                type: ACTION_TYPES.GET_ITEM_SUCCESS,
                data: {data: 'item'},
            })
        ).toEqual(
            {
                appState: APP_STATES.DETAILS_PAGE,
                item: {data: 'item'},
            }
        );
    });

    it('should handle GET_ITEMS_BY_GENRE_SUCCESS', () => {
        expect(
            appReducer({}, {
                type: ACTION_TYPES.GET_ITEMS_BY_GENRE_SUCCESS,
                data: ['items'],
            })
        ).toEqual(
            {
                items: ['items'],
            }
        );
    });

    it('should handle SET_SEARCH_VALUE', () => {
        expect(
            appReducer({}, {
                type: ACTION_TYPES.SET_SEARCH_VALUE,
                value: 'value',
            })
        ).toEqual(
            {
                value: 'value',
            }
        );
    });

    it('should handle SET_SORT_BY', () => {
        expect(
            appReducer({}, {
                type: ACTION_TYPES.SET_SORT_BY,
                sortBy: 'sortBy',
            })
        ).toEqual(
            {
                sortBy: 'sortBy',
            }
        );
    });

    it('should handle SET_SEARCH_BY', () => {
        expect(
            appReducer({}, {
                type: ACTION_TYPES.SET_SEARCH_BY,
                searchBy: 'searchBy',
            })
        ).toEqual(
            {
                searchBy: 'searchBy',
            }
        );
    });
});

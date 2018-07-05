import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import * as actions from 'actions/appActions';
import ACTION_TYPES from 'constants/ACTION_TYPES';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('app actions', () => {
    describe('sync actions', () => {
        it('should create an action to set SearchBy', () => {
            const searchBy = 'searchBy';
            const expectedAction = {
                type: ACTION_TYPES.SET_SEARCH_BY,
                searchBy,
            };
            expect(actions.setSearchBy(searchBy)).toEqual(expectedAction);
        });

        it('should create an action to set SortBy', () => {
            const sortBy = 'sortBy';
            const expectedAction = {
                type: ACTION_TYPES.SET_SORT_BY,
                sortBy,
            };
            expect(actions.setSortBy(sortBy)).toEqual(expectedAction);
        });

        it('should create an action to set SearchValue', () => {
            const value = 'value';
            const expectedAction = {
                type: ACTION_TYPES.SET_SEARCH_VALUE,
                value,
            };
            expect(actions.setSearchValue(value)).toEqual(expectedAction);
        });
    });

    describe('async actions', () => {
        afterEach(() => {
            fetchMock.reset();
            fetchMock.restore();
        });

        it('creates GET_ITEMS_SUCCESS when getting items has been done', () => {
            fetchMock
                .getOnce('*', {
                    body: {data: ['some data']},
                    headers: {'content-type': 'application/json'}
                });

            const expectedActions = [
                {type: ACTION_TYPES.GET_ITEMS_SUCCESS, data: ['some data']},
            ];
            const store = mockStore({appReducer: {data: []}});
            return store.dispatch(actions.getItems()).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });

        it('creates GET_ITEM_SUCCESS when getting item has been done', () => {
            fetchMock
                .getOnce('*', {
                    body: {data: ['some data']},
                    headers: {'content-type': 'application/json'}
                });

            const expectedActions = [
                {type: ACTION_TYPES.GET_ITEM_SUCCESS, data: {data: ['some data']}},
            ];
            const store = mockStore({appReducer: {data: []}});
            return store.dispatch(actions.getItem()).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });

        it('creates GET_ITEMS_BY_GENRE_SUCCESS when getting items by genre has been done', () => {
            fetchMock
                .getOnce('*', {
                    body: {data: ['some data']},
                    headers: {'content-type': 'application/json'}
                });

            const expectedActions = [
                {type: ACTION_TYPES.GET_ITEMS_BY_GENRE_SUCCESS, data: ['some data']},
            ];
            const store = mockStore({appReducer: {data: []}});
            return store.dispatch(actions.getItemsByGenre()).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });
    });
});

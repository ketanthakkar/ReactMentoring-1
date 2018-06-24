import {call, put} from 'redux-saga/effects';
import {callApi} from '../utils/ApiUtils';

import ACTION_TYPES from '../constants/ACTION_TYPES';
import SEARCH_BY from '../constants/SEARCH_BY';
import API from '../constants/API';

export function* getItemsAsync(action) {
    const url = `${API.MOVIES_URL}?search=${action.value}&searchBy=${action.searchBy}&sortBy=${action.sortBy}&sortOrder=desc&limit=12`;
    const {data} = yield call(callApi, url);

    yield put(getItemsSuccess(data));
}

export const getItems = (value, searchBy, sortBy) => ({
    type: ACTION_TYPES.GET_ITEMS,
    value,
    searchBy,
    sortBy,
});

export function* getItemAsync(action) {
    if (action.id) {
        const {data} = yield call(callApi, `${API.MOVIES_URL}/${action.id}`);
        const searchValue = data.genres && data.genres[0];

        yield [
            put(getItemSuccess(data)),
            put(getItemsByGenre(searchValue)),
        ];
    }
}

export const getItem = (id) => ({
    type: ACTION_TYPES.GET_ITEM,
    id,
});

export function* getItemsByGenreAsync(action) {
    const url = `${API.MOVIES_URL}?search=${action.value}&searchBy=${SEARCH_BY.GENRE}&sortOrder=desc&limit=12`;
    const {data} = yield call(callApi, url);

    yield put(getItemsByGenreSuccess(data));
}

export const getItemsByGenre = (value) => ({
    type: ACTION_TYPES.GET_ITEMS_BY_GENRE,
    value,
});

export const getItemsSuccess = (data) => ({
    type: ACTION_TYPES.GET_ITEMS_SUCCESS,
    ...data,
});

export const getItemSuccess = (data) => ({
    type: ACTION_TYPES.GET_ITEM_SUCCESS,
    data,
});

export const getItemsByGenreSuccess = (data) => ({
    type: ACTION_TYPES.GET_ITEMS_BY_GENRE_SUCCESS,
    ...data,
});

export const setSearchValue = (value) => ({
    type: ACTION_TYPES.SET_SEARCH_VALUE,
    value,
});

export const setSortBy = (sortBy) => ({
    type: ACTION_TYPES.SET_SORT_BY,
    sortBy,
});

export const setSearchBy = (searchBy) => ({
    type: ACTION_TYPES.SET_SEARCH_BY,
    searchBy,
});

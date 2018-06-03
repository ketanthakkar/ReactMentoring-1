import {callApi} from '../utils/ApiUtils';

import ACTION_TYPES from '../constants/ACTION_TYPES';
import SEARCH_BY from '../constants/SEARCH_BY';
import API from '../constants/API';

export const getItems = (value, searchBy, sortBy) => async (dispatch) => {
    const url = `${API.MOVIES_URL}?search=${value}&searchBy=${searchBy}&sortBy=${sortBy}&sortOrder=desc&limit=12`;
    const {data} = await callApi(url);
    dispatch(getItemsSuccess(data));
};

export const getItem = (id) => async (dispatch) => {
    if (id) {
        const {data} = await callApi(`${API.MOVIES_URL}/${id}`);
        const searchValue = data.genres && data.genres[0];
        dispatch(getItemSuccess(data));
        dispatch(getItemsByGenre(searchValue));
    }
};

export const getItemsByGenre = (value) => async (dispatch) => {
    const url = `${API.MOVIES_URL}?search=${value}&searchBy=${SEARCH_BY.GENRE}&sortOrder=desc&limit=12`;
    const {data} = await callApi(url);
    dispatch(getItemsByGenreSuccess(data));
};

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

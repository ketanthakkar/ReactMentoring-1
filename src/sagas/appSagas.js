import {all, takeLatest} from 'redux-saga/effects';

import {getItemsAsync, getItemAsync, getItemsByGenreAsync} from '../actions/appActions';
import ACTION_TYPES from '../constants/ACTION_TYPES';

function* watchGetItems() {
    yield takeLatest(ACTION_TYPES.GET_ITEMS, getItemsAsync);
}
function* watchGetItem() {
    yield takeLatest(ACTION_TYPES.GET_ITEM, getItemAsync);
}
function* watchGetItemsByGenre() {
    yield takeLatest(ACTION_TYPES.GET_ITEMS_BY_GENRE, getItemsByGenreAsync);
}

function* appSaga() {
    yield all([
        watchGetItems(),
        watchGetItem(),
        watchGetItemsByGenre(),
    ]);
}

export default appSaga;

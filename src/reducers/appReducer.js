import ACTION_TYPES from '../constants/ACTION_TYPES';
import APP_STATES from '../constants/APP_STATES';
import SEARCH_BY from '../constants/SEARCH_BY';
import SORT_BY from '../constants/SORT_BY';

const initialState = {
    appState: APP_STATES.SEARCH_PAGE,
    value: '',
    sortBy: SORT_BY.RELEASE_DATE,
    searchBy: SEARCH_BY.TITLE,
    items: [],
    item: {}
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.GET_ITEMS_SUCCESS:
            return {
                ...state,
                appState: APP_STATES.SEARCH_PAGE,
                items: action.data,
                total: action.total,
            };
        case ACTION_TYPES.GET_ITEM_SUCCESS:
            return {
                ...state,
                appState: APP_STATES.DETAILS_PAGE,
                item: action.data,
            };
        case ACTION_TYPES.GET_ITEMS_BY_GENRE_SUCCESS:
            return {
                ...state,
                items: action.data,
            };
        case ACTION_TYPES.SET_SEARCH_VALUE:
            return {
                ...state,
                value: action.value,
            };
        case ACTION_TYPES.SET_SORT_BY:
            return {
                ...state,
                sortBy: action.sortBy,
            };
        case ACTION_TYPES.SET_SEARCH_BY:
            return {
                ...state,
                searchBy: action.searchBy,
            };
        default:
            return state;
    }
};

export default appReducer;

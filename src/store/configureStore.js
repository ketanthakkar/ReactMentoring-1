import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

import reducer from '../reducers';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function configureStore(initialState) {
    let store = createStoreWithMiddleware(persistedReducer, initialState);
    let persistor = persistStore(store);

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            store.replaceReducer(persistReducer(persistConfig, reducer));
        });
    }

    return {store, persistor}
}

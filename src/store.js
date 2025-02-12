import React from 'react';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import Reducers from './Reducers'

const persistConfig = {
    key: 'root',
    storage,
    whitelist:[ 'usuario' ]
};

const persistedReducer = persistReducer( persistConfig, Reducers );

const store = createStore(persistedReducer);
const persistor = persistStore( store );

export { store, persistor };
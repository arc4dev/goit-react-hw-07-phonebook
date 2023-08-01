import storage from 'redux-persist/lib/storage';

import { filterReducer } from './slices/filterSlice';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import thunk from 'redux-thunk';

const { configureStore, combineReducers } = require('@reduxjs/toolkit');
const { contactsReducer } = require('./slices/contactsSlice');

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);

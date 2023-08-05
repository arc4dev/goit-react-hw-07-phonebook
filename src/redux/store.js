import { filterReducer } from './slices/filterSlice';

const { configureStore } = require('@reduxjs/toolkit');
const { contactsReducer } = require('./slices/contactsSlice');

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

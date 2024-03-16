import { configureStore } from '@reduxjs/toolkit';

import contactsReducer from './contacts/contactsSlice';
import filterReducer from './contacts/filterSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

const rootStore = { store };

export default rootStore;

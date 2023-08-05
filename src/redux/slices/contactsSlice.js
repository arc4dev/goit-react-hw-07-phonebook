import { fetchContacts, addContact, deleteContact } from 'redux/operations';

const { createSlice } = require('@reduxjs/toolkit');

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    // addContact: {
    //   reducer: (state, action) => {
    //     return [...state.items, action.payload];
    //   },
    //   prepare: ({ name, number }) => {
    //     return {
    //       payload: {
    //         id: nanoid(9),
    //         name,
    //         number,
    //       },
    //     };
    //   },
    // },
    // deleteContact: {
    //   reducer: (state, action) => {
    //     return state.items.filter(item => item.id !== action.payload);
    //   },
    //   prepare: id => {
    //     return {
    //       payload: id,
    //     };
    //   },
    // },
  },
  extraReducers: {
    // fetchAll
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    // addContact
    [addContact.pending]: handlePending,
    [addContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    // deleteContact
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;

      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const { fetchingInProgress, fetchingError, fetchingSuccess } =
  contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

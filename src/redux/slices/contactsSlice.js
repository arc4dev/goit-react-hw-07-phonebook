const { createSlice, nanoid } = require('@reduxjs/toolkit');

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer: (state, action) => {
        return [...state, action.payload];
      },
      prepare: ({ name, number }) => {
        return {
          payload: {
            id: nanoid(9),
            name,
            number,
          },
        };
      },
    },
    deleteContact: {
      reducer: (state, action) => {
        return state.filter(item => item.id !== action.payload);
      },
      prepare: id => {
        return {
          payload: id,
        };
      },
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        items: [],
    },
    reducers: {
        addContact: {
            reducer(state, action) {
                state.items.push(action.payload);
            },
            prepare({name, number}) {
                return {
                    payload: {
                        id: nanoid(),
                        name: name,
                        number: number,
                    },
                };
            },
        },
        deleteContact(state, action) {
           state.items = state.items.filter(item => item.id !== action.payload);
        }
    }
})

export const { addContact, deleteContact } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
export const selectContacts = state => state.contacts.items;
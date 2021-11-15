import { combineReducers } from 'redux';
import { addContact, deleteContact, changeFilter } from './actions';
import { createReducer } from '@reduxjs/toolkit';

const items = createReducer([], {
  [deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
  [addContact]: (state, { payload }) => [...state, payload],
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items,
  filter,
});

export default contactsReducer;

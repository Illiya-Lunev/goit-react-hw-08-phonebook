import { combineReducers } from 'redux';
import {
  addContactsSuccess,
  deleteContactsSuccess,
  getContactsSuccess,
  changeFilter,
} from './actions';
import { createReducer } from '@reduxjs/toolkit';

const items = createReducer([], {
  [getContactsSuccess]: (_, { payload }) => payload,
  [deleteContactsSuccess]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
  [addContactsSuccess]: (state, { payload }) => [...state, payload],
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({
  items,
  filter,
});

export default contactsReducer;

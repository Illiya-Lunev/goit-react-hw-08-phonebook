import {
  addContactsRequests,
  addContactsSuccess,
  addContactsError,
  deleteContactsRequests,
  deleteContactsSuccess,
  deleteContactsError,
  getContactsRequests,
  getContactsSuccess,
  getContactsError,
} from './actions';

import {
  addContactsApi,
  getContactsApi,
  deleteContactsApi,
} from '../apiService';

export const fetchContacts = () => async dispatch => {
  dispatch(getContactsRequests());
  try {
    const contactsGet = await getContactsApi();
    dispatch(getContactsSuccess(contactsGet));
  } catch (error) {
    dispatch(getContactsError(error));
  }
};

export const addContact =
  ({ name, number, id }) =>
  async dispatch => {
    dispatch(addContactsRequests());
    try {
      const contactsAdd = await addContactsApi({ name, number, id });
      dispatch(addContactsSuccess(contactsAdd));
    } catch (error) {
      dispatch(addContactsError(error));
    }
  };

export const deleteContacts = contactId => async dispatch => {
  dispatch(deleteContactsRequests());
  try {
    await deleteContactsApi(contactId);
    dispatch(deleteContactsSuccess(contactId));
  } catch (error) {
    dispatch(deleteContactsError(error));
  }
};

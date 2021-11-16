import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const addContactsApi = ({ name, number, id }) => {
  return axios
    .post('/contacts', { name, number, id })
    .then(({ data }) => data)
    .catch(err => {
      throw err;
    });
};

export const getContactsApi = () => {
  return axios
    .get('/contacts')
    .then(({ data }) => data)
    .catch(err => {
      throw err;
    });
};

export const deleteContactsApi = contactId => {
  return axios
    .delete(`/contacts/${contactId}`)
    .then(({ data }) => data)
    .catch(err => {
      throw err;
    });
};

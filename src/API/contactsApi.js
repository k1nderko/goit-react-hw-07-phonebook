import axios from 'axios';

axios.defaults.baseURL = 'https://65f587d841d90c1c5e09a538.mockapi.io';

export async function fetchContacts() {
  return await axios.get(`/contacts`).then(res => res.data);
}

export const addContact = async contact => {
  return await axios.post('/contacts', contact).then(({ data }) => data);
};

export const deleteContact = async contactId => {
  return await axios.delete(`/contacts/${contactId}`);
};

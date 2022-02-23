import axios from 'axios';

// axios.defaults.baseURL = 'https://62138ad489fad53b1ff869e0.mockapi.io/api/v1';

export const getContactsApi = async () => {
  try {
    const { data } = await axios.get(
      'https://62138ad489fad53b1ff869e0.mockapi.io/api/v1/contacts'
    );
    return data;
  } catch (error) {
    return error;
  }
};
export const addContactsApi = async newContact => {
  try {
    const { data } = await axios.post(
      'https://62138ad489fad53b1ff869e0.mockapi.io/api/v1/contacts',
      newContact
    );
    return data;
  } catch (error) {
    return error;
  }
};
export const removeContactsApi = async id => {
  try {
    await axios.delete(
      `https://62138ad489fad53b1ff869e0.mockapi.io/api/v1/contacts/${id}`
    );
    return id;
  } catch (error) {
    return error;
  }
};

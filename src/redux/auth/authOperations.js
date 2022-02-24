import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
export const register = createAsyncThunk(
  'auth/register',
  async (registationData, thunkApi) => {
    try {
      const { data } = await axios.post('/users/signup', registationData);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const login = createAsyncThunk(
  'auth/login',
  async (registationData, thunkApi) => {
    try {
      const { data } = await axios.post('/users/login', registationData);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const logout = createAsyncThunk('auth/logout', async thunkApi => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
export const fetchRefresh = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const tokenCurrent = state.auth.token;
    if (tokenCurrent === null) {
      return thunkApi.rejectWithValue();
    }
    token.set(tokenCurrent);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

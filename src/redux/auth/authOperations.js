import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const register = createAsyncThunk(
  'auth/register',
  async (registationData, thunkApi) => {
    try {
      const { data } = await axios.post('/users/signup', registationData);
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
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

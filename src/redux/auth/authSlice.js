import { createSlice } from '@reduxjs/toolkit';
import { register, login, logout, fetchRefresh } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedin: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedin = true;
    },
    [login.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedin = true;
    },
    [logout.fulfilled]: (state, action) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedin = false;
    },
    [fetchRefresh.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchRefresh.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedin = true;
      state.isLoading = false;
    },
    [fetchRefresh.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export default authSlice.reducer;

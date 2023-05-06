import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './operations';

const initialState = {
  users: null,
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};
const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.users = payload;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, handlePending)
      .addCase(fetchUsers.fulfilled, handleFulfilled)
      .addCase(fetchUsers.rejected, handleRejected);
  },
});

export const usersReducer = usersSlice.reducer;

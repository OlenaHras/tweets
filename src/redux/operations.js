import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6455f99b5f9a4f236137da5c.mockapi.io/api/v1';

export const fetchUsers = createAsyncThunk(
  'users/fetchAll',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`/users`, {
        params: {
          limit: 3,
          page,
        },
      });
      return await response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

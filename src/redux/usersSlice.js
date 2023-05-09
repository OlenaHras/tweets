import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  followedUsers: localStorage.getItem('followed')
    ? JSON.parse(localStorage.getItem('followed'))
    : [],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUsers: (state, action) => {
      state.users = [...state.users, ...action.payload];
      localStorage.setItem('users', JSON.stringify(state.users));
    },
    clearUsers: state => {
      state.users = initialState.users;
    },
    addFollows: (state, { payload }) => {
      const followedUser = { ...payload };

      state.followedUsers.push(followedUser);
      localStorage.setItem('followed', JSON.stringify(state.followedUsers));
    },
    removeFollowing: (state, { payload }) => {
      state.followedUsers = state.followedUsers.filter(
        user => user.id !== payload
      );
      localStorage.setItem('followed', JSON.stringify(state.followedUsers));
    },
  },
});

export const {
  addUsers,
  addFollows,
  removeFollowing,
  clearUsers,
} = usersSlice.actions;
export const usersReducer = usersSlice.reducer;

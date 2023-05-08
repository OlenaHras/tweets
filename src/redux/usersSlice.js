import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, followUser, unfollowUser } from './operations';

const initialState = {
  // users: localStorage.getItem('users')
  //   ? JSON.parse(localStorage.getItem('users'))
  //   : [],
  users: [],
  followedUsers: localStorage.getItem('followed')
    ? JSON.parse(localStorage.getItem('followed'))
    : [],
  // isLoading: false,
  // error: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUsers: (state, action) => {
      state.users = [...state.users, ...action.payload];
      localStorage.setItem('users', JSON.stringify(state.users));
    },
    addFollows: (state, { payload }) => {
      // payload.followers += 1;
      const followList = { ...payload };
      // followList.followers += 1;
      // const changedFollowersValue = {
      //   ...payload,
      //   ...(followList.followers + 1),
      // };
      console.log(payload);
      state.followedUsers.push(followList);
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

// const handlePending = state => {
//   state.isLoading = true;
// };
// const handleFulfilled = (state, { payload }) => {
//   state.isLoading = false;
//   state.error = null;
//   state.users = payload;
// };

// const handleRejected = (state, { payload }) => {
//   state.isLoading = false;
//   state.error = payload;
// };

// export const usersSlice = createSlice({
//   name: 'users',
//   initialState,
//   extraReducers: builder => {
//     builder
//       .addCase(fetchUsers.pending, handlePending)
//       .addCase(fetchUsers.fulfilled, handleFulfilled)
//       .addCase(fetchUsers.rejected, handleRejected)
//       .addCase(followUser.pending, handlePending)
//       .addCase(followUser.fulfilled, (state, { payload }) => {
//         state.users.splice(payload.id - 1, 1, payload);
//         state.isLoading = false;
//       })
//       .addCase(followUser.rejected, handleRejected)
//       .addCase(unfollowUser.pending, handlePending)
//       .addCase(unfollowUser.fulfilled, (state, { payload }) => {
//         state.users.splice(payload.id - 1, 1, payload);
//         state.isLoading = false;
//       })
//       .addCase(unfollowUser.rejected, handleRejected);
//   },
// });
export const { addUsers, addFollows, removeFollowing } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;

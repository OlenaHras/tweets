import { configureStore } from '@reduxjs/toolkit';

import { usersReducer } from './usersSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
// export const persistor = persistStore(store);

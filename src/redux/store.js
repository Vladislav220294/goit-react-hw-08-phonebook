import { configureStore } from '@reduxjs/toolkit';
import contactsReduer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
// import storage from 'reduxjs-toolkit-persist/lib/storage';
import authReducer from './auth/authSlice';
import { persistReducer, persistStore } from 'reduxjs-toolkit-persist';
// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

export const store = configureStore({
  reducer: {
    contacts: contactsReduer,
    // auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware: getDefaultMiddlewate => getDefaultMiddlewate(),
});

// export const persistor = persistStore(store);

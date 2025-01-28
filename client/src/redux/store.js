// import { configureStore } from '@reduxjs/toolkit'
// import userReducer from './user/userSlice'

// export const store = configureStore({
//   reducer: {
//     user:userReducer,
//   },
// });

import { configureStore,combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit"
import userReducer from "./user/userSlice"
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { version } from "mongoose";
import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({
  user: userReducer,
});

const persistConfig = {
  key:'root',
  storage,
  version:1,
};


const persistedReducer = persistReducer(persistConfig,rootReducer);

export const store = configureStore({
  reducer: persistedReducer, 
  middleware: (getDefaultMiddleware)=>getDefaultMiddleware({serializableCheck:false}),
});

export const persistor = persistStore(store);

// These are JSDoc comments to provide type hints for JavaScript
/**
 * @typedef {ReturnType<typeof store.getState>} RootState 
 */

/**
 * @typedef {typeof store.dispatch} AppDispatch
 */



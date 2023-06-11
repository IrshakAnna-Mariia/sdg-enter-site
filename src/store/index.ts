import { AnyAction, combineReducers, configureStore, PreloadedState, Reducer } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { apiSlice } from './api/apiSlice';
import { rtkQueryErrorLogger } from './errorCatchingMiddleware/errorCatchingMiddleware';
import userReducer from './user/userSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'],
};

const middlewares = [apiSlice.middleware, rtkQueryErrorLogger];

const appReducer = combineReducers({
  user: userReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const rootReducer: Reducer = (state: RootState, action: AnyAction) => appReducer(state, action);

const persistedReducer = persistReducer(persistConfig, rootReducer);

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: persistedReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(middlewares),
  });
}

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(middlewares),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof appReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

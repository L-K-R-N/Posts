import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import AuthReducer from './reducers/AuthSlice'
import { PostApi } from '../services/PostApi';
const rootReducer = combineReducers({
    AuthReducer,
    [PostApi.reducerPath]: PostApi.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([PostApi.middleware])
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

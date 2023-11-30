import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import AuthReducer from './reducers/AuthSlice'
const rootReducer = combineReducers({
    AuthReducer,

})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([])
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

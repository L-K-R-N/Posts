import { createSlice, PayloadAction} from "@reduxjs/toolkit";


interface IAuthState {
    isAuth: boolean;
    isLoading: boolean;
}
const initialState = {
    isAuth: false,
    isLoading: false
}

export const AuthSlice = createSlice({
    initialState,
    name: 'AuthSlice',
    reducers: {
        setIsAuth: (state: IAuthState, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload;
        },
        setIsLoading: (state: IAuthState, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
    }
})

export default AuthSlice.reducer;

export const {
    setIsAuth,
    setIsLoading
} = AuthSlice.actions
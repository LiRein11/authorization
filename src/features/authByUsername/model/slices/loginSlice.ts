import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { LoginSchema } from '../types/loginSchema'
import { loginByUsername } from '../services/loginByUsername/loginByUsername'

const initialState: LoginSchema = {
    isLoading: false,
    error: undefined,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setClearError: (state) => {
            state.error = null || ''
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginByUsername.pending, (state) => {
            state.isLoading = true
            state.error = undefined
        })
        builder.addCase(loginByUsername.fulfilled, (state) => {
            state.isLoading = false
        })
        builder.addCase(
            loginByUsername.rejected,
            (state, action: PayloadAction<string | undefined>) => {
                state.isLoading = false
                state.error = action.payload
            }
        )
    },
})

export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice

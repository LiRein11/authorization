import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { UserSchema, User } from '../types/userSchema'

const initialState: UserSchema = { _inited: false }

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload
        },
        initAuthData: (state) => {
            state._inited = true
        },
        logout: (state) => {
            state.authData = undefined
        },
    },
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice

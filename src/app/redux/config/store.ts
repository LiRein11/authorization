import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from 'entities/User'

import { useDispatch } from 'react-redux'
import { $api } from 'shared/api/api'
import { ThunkExtraArg } from './StateSchema'
import { loginReducer } from 'features/authByUsername/model/slices/loginSlice'

const extraArg: ThunkExtraArg = {
    api: $api,
}

export const store = configureStore({
    reducer: {
        user: userReducer,
        loginForm: loginReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: { extraArgument: extraArg },
        }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch

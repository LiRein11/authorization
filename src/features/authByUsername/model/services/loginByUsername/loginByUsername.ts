import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/redux'
import { User, userActions } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localstorage'

interface LoginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>('login/loginByUsername', async ({ username, password }, thunkApi) => {
    const { dispatch, extra, rejectWithValue } = thunkApi
    try {
        const response = await extra.api.post<User>('/auth/login', {
            username,
            password,
        })

        if (!response.data) {
            throw new Error()
        }

        dispatch(userActions.setAuthData(response.data))
        localStorage.setItem(
            USER_LOCALSTORAGE_KEY,
            JSON.stringify(response.data.token)
        )

        return response.data
    } catch (e) {
        return rejectWithValue('error')
    }
})

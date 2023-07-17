import { DeepPartial } from '@reduxjs/toolkit'
import { LoginSchema } from '../types/loginSchema'
import { loginActions, loginReducer } from './loginSlice'

describe('loginSlice.test', () => {
    test('test set clearError', () => {
        const state: DeepPartial<LoginSchema> = { error: 'error' }
        expect(
            loginReducer(state as LoginSchema, loginActions.setClearError())
        ).toEqual({
            error: null || '',
        })
    })
})

import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/redux'
import { getLoginIsLoading } from './getLoginIsLoading'

describe('getLoginIsLoading.test', () => {
    test('is loading true should return true', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: { isLoading: true },
        }
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true)
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false)
    })
})

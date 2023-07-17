import { DeepPartial } from '@reduxjs/toolkit'
import { StateSchema } from 'app/redux'
import { getUserAuthData } from './getUserAuthData'

const userData = {
    id: 1,
    username: 'asf',
    email: 'asf@fa.as',
    firstName: 'awwa',
    lastName: 'saf',
    gender: 'male',
    image: 'fasfa.jpg',
    token: 'asfawfafwa-asfaw',
}

describe('getUserAuthData.test', () => {
    test('should return authData', () => {
        const state: DeepPartial<StateSchema> = {
            user: { authData: userData },
        }
        expect(getUserAuthData(state as StateSchema)).toEqual(userData)
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getUserAuthData(state as StateSchema)).toEqual(undefined)
    })
})

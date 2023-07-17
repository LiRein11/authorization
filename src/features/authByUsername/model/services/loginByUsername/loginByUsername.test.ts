import { userActions } from 'entities/User'
import { loginByUsername } from './loginByUsername'
import { StateSchema } from 'app/redux'
import { Dispatch } from '@reduxjs/toolkit'
import axios from 'axios'
import { ThunkExtraArg } from 'app/redux/config/StateSchema'

jest.mock('axios')
const mockedAxios = jest.mocked(axios)
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
describe('loginByUsername.test', () => {
    let dispatch: Dispatch
    let getState: () => StateSchema
    let extra: any

    beforeEach(() => {
        dispatch = jest.fn()
        getState = jest.fn()
        extra = {
            api: mockedAxios,
        }
    })

    test('success login', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }))
        const action = loginByUsername({ username: 'asf', password: '123' })
        const result = await action(dispatch, getState, extra)
        console.log(result)
        expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData))

        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('fulfilled')
    })

    test('error login', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
        const action = loginByUsername({ username: 'asf', password: '123' })
        const result = await action(dispatch, getState, extra)
        console.log(result)

        expect(mockedAxios.post).toHaveBeenCalled()
        expect(result.meta.requestStatus).toBe('rejected')
    })
})

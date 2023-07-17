import { StateSchema } from 'app/redux'

export const getUserAuthData = (state: StateSchema) => state.user?.authData

import { StateSchema } from 'app/redux'

export const getLoginError = (state: StateSchema) => state?.loginForm?.error

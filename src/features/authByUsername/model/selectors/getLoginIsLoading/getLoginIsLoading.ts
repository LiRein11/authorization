import { StateSchema } from 'app/redux'

export const getLoginIsLoading = (state: StateSchema) =>
    state?.loginForm?.isLoading || false

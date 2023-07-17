import { UserSchema } from 'entities/User'
import { AxiosInstance } from 'axios'
import { LoginSchema } from 'features/authByUsername'

export interface StateSchema {
    user: UserSchema
    loginForm: LoginSchema
}

export interface ThunkExtraArg {
    api: AxiosInstance
}

export interface ThunkConfig<T> {
    rejectValue: T
    extra: ThunkExtraArg
    state: StateSchema
}

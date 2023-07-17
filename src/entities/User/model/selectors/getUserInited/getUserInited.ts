import { StateSchema } from 'app/redux'

export const getUserInited = (state: StateSchema) => state.user?._inited

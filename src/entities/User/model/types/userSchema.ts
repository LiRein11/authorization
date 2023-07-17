export interface User {
    id: number
    username: string
    email: string
    firstName: string
    lastName: string
    gender: string
    image: string
    token: string
}

export interface UserSchema {
    authData?: User
    isLoading?: boolean
    error?: string
    _inited: boolean
}
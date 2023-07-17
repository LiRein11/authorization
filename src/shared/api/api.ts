import axios from 'axios'
import { BASE_API } from 'shared/consts/api'

export const $api = axios.create({
    baseURL: BASE_API,
    // headers: { authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '' },
})

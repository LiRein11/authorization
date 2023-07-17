import { useEffect } from 'react'

import { AppRouter } from './router'
import { useAppDispatch } from './redux/config/store'
import { getUserAuthData, userActions } from 'entities/User'
import { useSelector } from 'react-redux'
import { Navbar } from 'widgets/Navbar'
import { getUserInited } from 'entities/User/model/selectors/getUserInited/getUserInited'
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localstorage'
import jwt_decode from 'jwt-decode'
import './styles/App.scss'

function App() {
    const dispatch = useAppDispatch()
    const authData = useSelector(getUserAuthData)
    const inited = useSelector(getUserInited)
    const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) || ''

    useEffect(() => {
        dispatch(userActions.initAuthData())
        if (!authData && token) {
            dispatch(userActions.setAuthData(jwt_decode(token)))
        }
    }, [authData, dispatch, token])

    return (
        <div className="App">
            <Navbar />
            {inited && <AppRouter />}
        </div>
    )
}

export default App

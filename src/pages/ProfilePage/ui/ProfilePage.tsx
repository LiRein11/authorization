import { useAppDispatch } from 'app/redux'
import { userActions } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localstorage'

export const ProfilePage = () => {
    const dispatch = useAppDispatch()

    const onLogout = () => {
        dispatch(userActions.logout())
        localStorage.removeItem(USER_LOCALSTORAGE_KEY)
    }

    return (
        <section>
            <button className="btn" onClick={onLogout}>
                Logout
            </button>
        </section>
    )
}

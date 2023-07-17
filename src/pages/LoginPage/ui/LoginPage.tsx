import { LoginForm } from 'features/authByUsername'
import { USER_LOCALSTORAGE_KEY } from 'shared/consts/localstorage'

export const LoginPage: React.FC = () => {
    const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) || ''
    if (token) {
        return <section>Вы уже вошли</section>
    }
    return <LoginForm />
}

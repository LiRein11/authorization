import ReactDOM from 'react-dom/client'
import App from 'app/App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from 'app/redux/config/store'

import './app/styles/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
)

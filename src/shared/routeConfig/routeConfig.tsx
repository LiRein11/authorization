import { LoginPage } from 'pages/LoginPage'
import { MainPage } from 'pages/MainPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { RouteProps } from 'react-router-dom'

export type AppRouterProps = RouteProps & {
    authOnly?: boolean
}

export enum AppRoutes {
    MAIN = 'main',
    LOGIN = 'login',
    PROFILE = 'profile',

    // Last
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.LOGIN]: '/login',
    [AppRoutes.PROFILE]: '/profile',

    // Последний
    [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutes, AppRouterProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.LOGIN]: {
        path: RoutePath.login,
        element: <LoginPage />,
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage />,
        authOnly: true,
    },

    // Last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
}

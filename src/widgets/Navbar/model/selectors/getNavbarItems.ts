import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from 'entities/User'
import { RoutePath } from 'shared/routeConfig/routeConfig'
import { NavbarItemType } from '../types/navbar'
import { useSelector } from 'react-redux'

export const getNavbarItems = createSelector(getUserAuthData, (isAuthData) => {
    const authData = useSelector(getUserAuthData)

    const navbarItemsList: NavbarItemType[] = [
        {
            path: RoutePath.login,
            text: 'Login',
            hide: authData ? true : false,
        },
    ]

    if (isAuthData) {
        navbarItemsList.push({
            path: RoutePath.profile,
            text: 'Profile',
            authOnly: true,
        })
    }
    return navbarItemsList
})

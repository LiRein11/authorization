import { memo } from 'react'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'
import { NavbarItemType } from 'widgets/Navbar/model/types/navbar'
import { Link } from 'react-router-dom'

export interface NavbarItemProps {
    item: NavbarItemType
}

export const NavbarItem = memo(({ item }: NavbarItemProps) => {
    const isAuth = useSelector(getUserAuthData)

    if (item.authOnly && !isAuth) {
        return null
    }

    if (item.hide) {
        return null
    }

    return (
        <Link className="appLink" to={item.path}>
            {item.text}
        </Link>
    )
})

import { memo, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { getNavbarItems } from 'widgets/Navbar/model/selectors/getNavbarItems'
import { NavbarItem } from '../NavbarItem/NavbarItem'
import './Navbar.scss'

export const Navbar = memo(() => {
    const navbarItemsList = useSelector(getNavbarItems)

    const itemsList = useMemo(() => {
        return navbarItemsList.map((item) => (
            <NavbarItem item={item} key={item.path} />
        ))
    }, [navbarItemsList])

    return <header className="Navbar">{itemsList}</header>
})

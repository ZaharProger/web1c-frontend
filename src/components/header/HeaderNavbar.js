import React, {useContext, useEffect} from "react";
import {useLayout} from "../../hooks/useLayout";
import {BUTTONS, ROUTES} from "../../globalConstants";
import useRedux from "../../hooks/useRedux";
import {SUBMENU_STATE} from "../../state-manager/stateConstants";
import {appContext} from "../../contexts";
import {useSelector} from "react-redux";

const HeaderNavbar = () => {
    const navItems = useLayout(BUTTONS.navbar)
    const mainNavItems = navItems.slice(0, navItems.length - 1)
    const extraNavItems = navItems.slice(navItems.length - 1)

    const updateSubMenuState = useRedux(SUBMENU_STATE)

    const isDarkTheme = useContext(appContext).theme
    const mobileMenuState = useSelector(state => state.mobileMenuState)

    useEffect(() => {
        const items = document.querySelectorAll('.Navbar-list-item, .Submenu-item')

        for (let  i = 0; i < items.length; ++i) {
            const itemText = items[i].querySelector('span, i')

            itemText.onmouseover = () => {
                if (items[i].classList.contains('Navbar-list-item')) {
                    document.querySelectorAll('.Navbar-list-item').forEach(item =>
                        item.querySelector('span, i').style.color = isDarkTheme? '#FFFFFF' : '#212529')
                    updateSubMenuState(i)
                }
                itemText.style.color = '#FD9330'
            }
            itemText.onmouseleave = (e) => {
                const isParentItem = items[i].classList.contains('Navbar-list-item')

                if (isParentItem) {
                    const hasSubMenu = ![ROUTES.settings, ROUTES.auth].includes(BUTTONS.navbar[i].route)
                    let inSubMenuArea = false
                    if (hasSubMenu) {
                        const { left, right, bottom, top } = items[i].children[1].getBoundingClientRect()
                        inSubMenuArea = e.clientX >= left && e.clientX <= right &&
                            e.clientY <= bottom && e.clientY >= top - 20
                    }

                    if (!inSubMenuArea) {
                        itemText.style.color = isDarkTheme? '#FFFFFF' : '#212529'
                        updateSubMenuState(-1)
                    }
                }
                else {
                    updateSubMenuState(-1)
                }
            }
        }
    }, [navItems, mobileMenuState])

    return (
        <div id="Header-navbar" className="d-flex flex-row">
            <div className="d-flex flex-row">
                {
                    mainNavItems
                }
            </div>
            {
                extraNavItems
            }
        </div>
    )
}

export default HeaderNavbar
import React, {useEffect} from "react";
import {useButtonsPane} from "../../hooks/useButtonsPane";
import {BUTTON_KEYS, PANE_TEMPLATES} from "../../globalConstants";
import useRedux from "../../hooks/useRedux";
import {SUBMENU_STATE} from "../../state-manager/stateConstants";

const HeaderNavbar = () => {
    const navItems = useButtonsPane(PANE_TEMPLATES.navbar)
    const updateSubMenuState = useRedux(SUBMENU_STATE)

    useEffect(() => {
        const items = document.querySelectorAll('.Navbar-list-item, .Submenu-item')

        for (let  i = 0; i < items.length; ++i) {
            const itemText = items[i].querySelector('span')
            itemText.onmouseover = () => {
                itemText.style.color = '#FD9330'
                if (items[i].classList.contains('Navbar-list-item')) {
                    updateSubMenuState(i)
                }
            }
            itemText.onmouseleave = (e) => {
                const isParentItem = items[i].classList.contains('Navbar-list-item')

                if (isParentItem) {
                    const hasSubMenu = ![BUTTON_KEYS.settings_button, BUTTON_KEYS.sign_out_button]
                        .includes(PANE_TEMPLATES.navbar[i].key)
                    let inSubMenuArea = false
                    if (hasSubMenu) {
                        const { left, right, bottom, top } = items[i].children[1].getBoundingClientRect()
                        inSubMenuArea = e.clientX >= left && e.clientX <= right &&
                            e.clientY <= bottom && e.clientY >= top - 20
                    }

                    if (!inSubMenuArea) {
                        itemText.style.color = '#FFFFFF'
                        updateSubMenuState(-1)
                    }
                }
                else {
                    updateSubMenuState(-1)
                }
            }
        }
    }, [navItems])

    return (
        <div id="Header-navbar" className="d-flex flex-row mt-auto mb-auto ms-auto me-4">
            {
                navItems
            }
        </div>
    )
}

export default HeaderNavbar
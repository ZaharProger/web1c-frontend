import React, {useContext, useEffect} from "react";
import {useButtonsPane} from "../../hooks/useButtonsPane";
import {PANE_TEMPLATES} from "../../globalConstants";
import useRedux from "../../hooks/useRedux";
import {SUBMENU_STATE} from "../../state-manager/stateConstants";
import {appContext} from "../../contexts";
import {useLocation} from "react-router-dom";

const SubMenu = (props) => {
    const location = useLocation()
    const updateSubMenuState = useRedux(SUBMENU_STATE)
    const buttons = useButtonsPane(PANE_TEMPLATES.navbar[props.parent_item].sub_items)

    const isDarkTheme = useContext(appContext).theme

    useEffect(() => {
        const parentListItem = document.querySelectorAll('.Navbar-list-item')[props.parent_item]
        const parentSubMenu = parentListItem.querySelector('.Submenu')

        parentSubMenu.style.background = isDarkTheme? '#212529' : '#FFFFFF'
        parentSubMenu.onmouseleave = () => {
            parentListItem.querySelector('span').style.color = isDarkTheme? '#FFFFFF' : '#212529'
            updateSubMenuState(-1)
        }
        parentSubMenu.querySelectorAll('span').forEach(text => {
            text.style.color = isDarkTheme? '#FFFFFF' : '#212529'
            const prevTextColor = text.style.color

            text.onmouseover = () => text.style.color = '#FD9330'
            text.onmouseleave = () => text.style.color = prevTextColor
        })
    }, [location])

    return(
        <div className="Submenu d-flex flex-column mt-2">
            {
                buttons
            }
        </div>
    )
}

export default SubMenu
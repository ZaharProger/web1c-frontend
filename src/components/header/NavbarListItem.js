import React from "react";
import SubMenu from "./SubMenu";
import {useSelector} from "react-redux";
import {BUTTON_KEYS, PANE_TEMPLATES} from "../../globalConstants";

const NavbarListItem = (props) => {
    const { callback, caption, item_index, is_sign_out } = props.item_data
    const subMenuState = useSelector(state => state.subMenuState)

    const itemsWithoutSubMenu = PANE_TEMPLATES.navbar
        .filter(templateItem => [BUTTON_KEYS.sign_out_button, BUTTON_KEYS.settings_button]
            .includes(templateItem.key))

    return (
        <div className={ `Navbar-list-item${is_sign_out? ' sign-out-item' : ''}` }>
            <span onClick={ () => { if (callback !== null) callback() } } >
                { caption }
            </span>
            {
                subMenuState === item_index && !itemsWithoutSubMenu.includes(PANE_TEMPLATES.navbar[item_index])?
                    <SubMenu parent_item={ item_index } />
                    :
                    null
            }
        </div>
    )
}

export default NavbarListItem
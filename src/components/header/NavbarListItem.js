import React from "react";
import SubMenu from "./SubMenu";
import {useSelector} from "react-redux";
import {BUTTONS, ROUTES} from "../../globalConstants";

const NavbarListItem = (props) => {
    const { callback, icon, caption, item_index, is_sign_out } = props.item_data
    const subMenuState = useSelector(state => state.subMenuState)

    const itemsWithoutSubMenu = BUTTONS.navbar.filter(templateItem =>
        [ROUTES.auth, ROUTES.settings].includes(templateItem.route))

    return (
        <div className={ `Navbar-list-item${is_sign_out? ' sign-out-item' : ''}` }>
            {
                icon === null?
                    <span onClick={ () => { if (callback !== null) callback() } } >
                        { caption }
                    </span>
                    :
                    <i className={ `fa-regular fa-${icon} d-flex mt-auto mb-auto` }
                       onClick={ () => { if (callback !== null) callback() } }></i>
            }
            {
                subMenuState === item_index && !itemsWithoutSubMenu.includes(BUTTONS.navbar[item_index])?
                    <SubMenu parent_item={ item_index } />
                    :
                    null
            }
        </div>
    )
}

export default NavbarListItem
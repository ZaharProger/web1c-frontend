import React, {useContext} from "react";
import "../../styles/Header.css"
import HeaderLogo from './HeaderLogo'
import HeaderNavbar from "./HeaderNavbar";
import {appContext} from "../../contexts";
import useRedux from "../../hooks/useRedux";
import {MOBILE_MENU_STATE} from "../../state-manager/stateConstants";

const Header = () => {
    const changeMenuState = useRedux(MOBILE_MENU_STATE)
    const { is_mobile_screen, mobile_menu_state } = useContext(appContext)

    return (
        <div id="Header" className="d-flex flex-row pt-2 pb-5 w-100">
            {
                mobile_menu_state?
                    <HeaderNavbar />
                    :
                    <HeaderLogo />
            }
            {
                is_mobile_screen?
                    <i className="fa-regular fa-bars" onClick={ () => changeMenuState(!mobile_menu_state) }></i>
                    :
                    <HeaderNavbar is_drawer={ false } />
            }
        </div>
    );
}
export default Header;
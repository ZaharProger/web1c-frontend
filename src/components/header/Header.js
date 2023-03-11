import React from "react";
import "../../styles/Header.css"
import HeaderLogo from './HeaderLogo'
import HeaderNavbar from "./HeaderNavbar";

const Header = () => {
    return (
        <div id="Header" className="d-flex flex-row pt-2 pe-2 ps-2 pb-5 w-100">
            <HeaderLogo />
            <HeaderNavbar />
        </div>
    );
}
export default Header;
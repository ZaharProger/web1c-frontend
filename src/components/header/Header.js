import React from "react";
import "../../styles/Header.css"
import HeaderLogo from './HeaderLogo'
import HeaderNavbar from "./HeaderNavbar";

const Header = () => {
    return (
        <div id="Header" className="d-flex flex-row p-2 w-100">
            <HeaderLogo />
            <HeaderNavbar />
        </div>
    );
}
export default Header;
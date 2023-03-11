import React from "react";
import companyLogo from "../../pics/enplus_2005.svg";
import useRedirection from "../../hooks/useRedirection";
import {ROUTES} from "../../globalConstants";

const HeaderLogo = () => {
    const redirect = useRedirection()
    return (
        <div id="Header-logo" className="d-flex flex-row me-3 flex-grow-1">
            <img className="logo-nav d-flex" src={companyLogo}
                 onClick={ () => redirect(ROUTES.main) } alt="company logo"></img>
            <input type="text" placeholder=" &#xf002; Поиск"
                   className="search fontAwesome d-flex mt-auto mb-auto ms-5 w-50"></input>
        </div>
    )
}

export default HeaderLogo
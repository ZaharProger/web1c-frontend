import React, {useContext} from "react";
import useRedirection from "../../hooks/useRedirection";
import {ROUTES} from "../../globalConstants";
import {appContext} from "../../contexts";

const HeaderLogo = () => {
    const redirect = useRedirection()
    const isDarkTheme = useContext(appContext).theme

    return (
        <div id="Header-logo" className="d-flex flex-row me-3 ms-2 flex-grow-1">
            <img className="logo-nav d-flex" src={`/pics/enplus_2005_${isDarkTheme? 'dark' : 'light'}.svg`}
                 onClick={ () => redirect(ROUTES.main) } alt="company logo"></img>
            <input type="text" placeholder=" &#xf002; Поиск"
                   className="search fontAwesome d-flex mt-auto mb-auto ms-5 w-50"></input>
        </div>
    )
}

export default HeaderLogo
import React from "react";
import {useButtonsPane} from "../../hooks/useButtonsPane";
import {PANE_TEMPLATES} from "../../globalConstants";

const HeaderNavbar = () => {
    const navItems = useButtonsPane(PANE_TEMPLATES.navbar)

    return (
        <div id="Header-navbar" className="d-flex flex-row mt-auto mb-auto ms-auto me-4">
            {
                navItems
            }
        </div>
    )
}

export default HeaderNavbar
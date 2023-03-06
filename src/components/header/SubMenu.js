import React from "react";
import {useButtonsPane} from "../../hooks/useButtonsPane";
import {PANE_TEMPLATES} from "../../globalConstants";
import useRedux from "../../hooks/useRedux";
import {SUBMENU_STATE} from "../../state-manager/stateConstants";

const SubMenu = (props) => {
    const updateSubMenuState = useRedux(SUBMENU_STATE)
    const buttons = useButtonsPane(PANE_TEMPLATES.navbar[props.parent_item].sub_items)

    return(
        <div className="Submenu d-flex flex-column mt-2" onMouseLeave={ () =>  {
            document
                .querySelectorAll('.Navbar-list-item')[props.parent_item]
                .querySelector('span').style.color = '#FFFFFF'
            updateSubMenuState(-1)
        }}>
            {
                buttons
            }
        </div>
    )
}

export default SubMenu
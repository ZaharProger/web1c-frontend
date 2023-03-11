import React from "react";
import useRedux from "../../../hooks/useRedux";
import "../../../styles/floatingButton.css"
import {CHATBOT_STATE} from "../../../state-manager/stateConstants";

const FloatingButton = () => {
    const setChatBotState = useRedux(CHATBOT_STATE)

    return (
        <div id="FloatingButton" className="d-flex mt-auto ms-auto">
            <i className="fa-solid fa-comments" onClick={ () => setChatBotState(true) }></i>
        </div>
    )
}
export default FloatingButton;
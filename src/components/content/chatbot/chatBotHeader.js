import React from "react";
import useRedux from "../../../hooks/useRedux";
import {CHATBOT_STATE} from "../../../state-manager/stateConstants";

const ChatBotHeader = () => {
    const setChatBotState = useRedux(CHATBOT_STATE)

    return (
        <div id="Chat-bot-header" className="d-flex pe-3 pt-3">
            <i id="chat-close" className="fa-regular fa-xmark ms-auto" onClick={ () => setChatBotState(false) }></i>
        </div>
    )
}

export default ChatBotHeader
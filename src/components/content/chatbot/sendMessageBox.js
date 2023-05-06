import React from "react";

const SendMessageBox = () => {
    return (
        <div id="Send-message-box" className="d-flex mt-auto mb-3 pe-3 ps-3">
            <input type="text" placeholder=" Сообщение" className="write search w-100 me-3"></input>
            <i id="chat-send" className="fa-regular fa-paper-plane mt-auto mb-auto"></i>
        </div>
    )
}

export default SendMessageBox
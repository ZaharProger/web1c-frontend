import {useEffect} from "react";
import "../../../styles/chatBot.css"
import MessageBox from "./messageBox";
import ChatBotHeader from "./chatBotHeader";

const ChatBot = () => {
    useEffect(() => {
        const sendButton = document.getElementById("chat-send")
        sendButton.onmouseover = () => sendButton.classList.replace('fa-regular', 'fa-solid')
        sendButton.onmouseleave = () => sendButton.classList.replace('fa-solid', 'fa-regular')
    }, [])

    return (
        <div id="ChatBot" className="d-flex flex-column">
            <ChatBotHeader />
            <MessageBox />
        </div>
    )
}
export default ChatBot
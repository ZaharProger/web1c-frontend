import {useContext, useEffect} from "react";
import "../../../styles/chatBot.css"
import MessageBox from "./messageBox";
import ChatBotHeader from "./chatBotHeader";
import {appContext} from "../../../contexts";
import {useLocation} from "react-router-dom";

const ChatBot = () => {
    const location = useLocation()
    const isDarkTheme = useContext(appContext).theme

    useEffect(() => {
        const chatBot = document.getElementById('ChatBot')
        chatBot.style.background = isDarkTheme? '#212529' : '#FFFFFF'

        chatBot.querySelectorAll('input, span').forEach(text =>
            text.style.color = isDarkTheme? '#FFFFFF' : '#212529')

        const sendButton = document.getElementById("chat-send")
        sendButton.onmouseover = () => sendButton.classList.replace('fa-regular', 'fa-solid')
        sendButton.onmouseleave = () => sendButton.classList.replace('fa-solid', 'fa-regular')
    }, [location])

    return (
        <div id="ChatBot" className="d-flex flex-column">
            <ChatBotHeader />
            <MessageBox />
        </div>
    )
}
export default ChatBot
import {useContext, useEffect} from "react";
import "../../../styles/chatBot.css"
import SendMessageBox from "./sendMessageBox";
import ChatBotHeader from "./chatBotHeader";
import {appContext} from "../../../contexts";
import {useLocation} from "react-router-dom";
import ChatBotContent from "./ChatBotContent";

const ChatBot = () => {
    const location = useLocation()
    const isDarkTheme = useContext(appContext).theme

    useEffect(() => {
        const chatBot = document.getElementById('ChatBot')
        chatBot.style.background = isDarkTheme? '#212529' : '#FFFFFF'

        chatBot.querySelectorAll('input, span').forEach(text =>
            text.style.color = isDarkTheme? '#FFFFFF' : '#212529')
    }, [location])

    return (
        <div id="ChatBot" className="d-flex flex-column">
            <ChatBotHeader />
            <ChatBotContent />
            <SendMessageBox />
        </div>
    )
}
export default ChatBot
import "../../styles/chatBot.css"
const ChatBot = props => {
    return (
        <div id="ChatBot" className={`${props.isOpened ? 'open' : 'close'}`}>
            <div className="chat__close" onClick={props.onChatClose}>×</div>
            {props.children}
            <div className="d-flex">
                <input type="text" placeholder=" Сообщение"
                    className="write search mx-3 w-75"></input>
                <div className="chat__send" onClick={props.onChatSend}>{"\uf1d9"}</div>
            </div>
        </div>
    )
}
export default ChatBot
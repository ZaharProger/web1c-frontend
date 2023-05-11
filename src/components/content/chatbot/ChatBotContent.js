import React, {useCallback} from "react";
import MessageBox from "./MessageBox";
import {parseDate} from "../../../utils";

export default function ChatBotContent() {
    const getMessages = useCallback(() => {
        const messages = []

        for (let i = 0; i < 10; ++i) {
            messages.push(i % 2 == 0? <MessageBox message_props={{
                    message_text: 'Lorem ipsum dolor',
                    message_date: parseDate(new Date()),
                    is_user: true
                }}/>
                :
                <MessageBox message_props={{
                    message_text: 'Sit amet',
                    message_date: parseDate(new Date()),
                    is_user: false
                }}/>)
        }

        return messages
    }, [])

    return (
        <div id="Chat-bot-content" className="d-flex flex-column p-1">
            {
                getMessages()
            }
        </div>
    )
}
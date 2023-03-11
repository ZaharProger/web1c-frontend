import { CHATBOT_STATE } from "../stateConstants";

export default function changeChatBotState(chatBotState){
    return {
        type: CHATBOT_STATE,
        chatBotState: chatBotState
    }
}
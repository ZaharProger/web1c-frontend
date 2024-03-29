import initialState from './initialState';
import {
    PROFILE_DATA,
    MODAL_STATE,
    SUBMENU_STATE,
    CHATBOT_STATE,
    MOBILE_MENU_STATE,
    CARDS, RELATED_EVENTS, RELATED_AGREEMENTS, REFRESH_FLAG, FULL_CARD_MODE
} from './stateConstants';

const changeState = (state=initialState, action) => {
    switch(action.type){
        case PROFILE_DATA:
            return {
                ...state,
                profileData: action.profileData
            }
        case MODAL_STATE:
            return {
                ...state,
                modalState: action.modalState
            }
        case SUBMENU_STATE:
            return {
                ...state,
                subMenuState: action.subMenuState
            }
        case CHATBOT_STATE:
            return {
                ...state,
                chatBotState: action.chatBotState
            }
        case MOBILE_MENU_STATE:
            return {
                ...state,
                mobileMenuState: action.mobileMenuState
            }
        case CARDS:
            return {
                ...state,
                cards: action.cards
            }
        case RELATED_EVENTS:
            return {
                ...state,
                relatedEvents: action.relatedEvents
            }
        case RELATED_AGREEMENTS:
            return {
                ...state,
                relatedAgreements: action.relatedAgreements
            }
        case REFRESH_FLAG:
            return {
                ...state,
                refreshFlag: action.refreshFlag
            }
        case FULL_CARD_MODE:
            return {
                ...state,
                fullCardMode: action.fullCardMode
            }
        default:
            return state;
    }
}

export default changeState;
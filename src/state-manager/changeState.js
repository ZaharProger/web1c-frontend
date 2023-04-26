import initialState from './initialState';
import {PROFILE_DATA, MODAL_STATE, SUBMENU_STATE, CHATBOT_STATE, MOBILE_MENU_STATE, CARDS} from './stateConstants';

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
        default:
            return state;
    }
}

export default changeState;
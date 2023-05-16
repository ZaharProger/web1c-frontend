import { useDispatch } from 'react-redux';

import changeProfileData from '../state-manager/actions/changeProfileData';
import changeModalState from '../state-manager/actions/changeModalState';
import changeSubMenuState from '../state-manager/actions/changeSubMenuState';
import changeChatBotState from "../state-manager/actions/changeChatBotState";
import {
    PROFILE_DATA,
    MODAL_STATE,
    SUBMENU_STATE,
    CHATBOT_STATE,
    MOBILE_MENU_STATE, CARDS, RELATED_EVENTS, RELATED_AGREEMENTS, REFRESH_FLAG, FULL_CARD_MODE
} from '../state-manager/stateConstants';
import changeMobileMenuState from "../state-manager/actions/changeMobileMenuState";
import changeCards from "../state-manager/actions/changeCards";
import {useCallback} from "react";
import changeRelatedEvents from "../state-manager/actions/changeRelatedEvents";
import changeRelatedAgreements from "../state-manager/actions/changeRelatedAgreements";
import changeRefreshFlag from "../state-manager/actions/changeRefreshFlag";
import changeFullCardMode from "../state-manager/actions/changeFullCardMode";

export default function useRedux(reduxAction){
    const dispatch = useDispatch();

    //Хук формирует функцию-callback, которая направляет запрос на изменение данных в Redux в
    //зависимости от переданного ключа экшена.
    let callback = null;
    switch(reduxAction){
        case PROFILE_DATA:
            callback = (profileData) => dispatch(changeProfileData(profileData));
            break;
        case MODAL_STATE:
            callback = (modalState) => dispatch(changeModalState(modalState));
            break;
        case SUBMENU_STATE:
            callback = (subMenuState) => dispatch(changeSubMenuState(subMenuState));
            break;
        case CHATBOT_STATE:
            callback = (chatBotState) => dispatch(changeChatBotState(chatBotState));
            break;
        case MOBILE_MENU_STATE:
            callback = (mobileMenuState) => dispatch(changeMobileMenuState(mobileMenuState));
            break;
        case CARDS:
            callback = (cards) => dispatch(changeCards(cards));
            break;
        case RELATED_EVENTS:
            callback = (events) => dispatch(changeRelatedEvents(events));
            break;
        case RELATED_AGREEMENTS:
            callback = (agreements) => dispatch(changeRelatedAgreements(agreements));
            break;
        case REFRESH_FLAG:
            callback = (refreshFlag) => dispatch(changeRefreshFlag(refreshFlag));
            break;
        case FULL_CARD_MODE:
            callback = (fullCardMode) => dispatch(changeFullCardMode(fullCardMode));
            break;
    }

    return useCallback(callback, [])
}
import {FULL_CARD_MODES} from "../globalConstants";

const initialState = {
    modalState: {
        isActive: false,
        message: ''
    },
    subMenuState: false,
    chatBotState: false,
    profileData: null,
    mobileMenuState: false,
    cards: Array(),
    relatedEvents: Array(),
    relatedAgreements: Array(),
    refreshFlag: false,
    fullCardMode: FULL_CARD_MODES.main
}

export default initialState;
import initialState from './initialState';
import { PROFILE_DATA, MODAL_STATE } from './stateConstants';

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
        default:
            return state;
    }
}

export default changeState;
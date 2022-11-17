import initialState from './initialState';
import { PROFILE_DATA } from './stateConstants';

const changeState = (state=initialState, action) => {
    switch(action.type){
        case PROFILE_DATA:
            return {
                ...state,
                profile_data: action.profile_data
            }
            break;
        default:
            return state;
    }
}

export default changeState;
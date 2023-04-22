import { MOBILE_MENU_STATE } from "../stateConstants";

export default function changeMobileMenuState(mobileMenuState){
    return {
        type: MOBILE_MENU_STATE,
        mobileMenuState: mobileMenuState
    }
}
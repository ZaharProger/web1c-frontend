import { SUBMENU_STATE } from "../stateConstants";

export default function changeProfileData(subMenuState){
    return {
        type: SUBMENU_STATE,
        subMenuState: subMenuState
    }
}
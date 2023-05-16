import { FULL_CARD_MODE } from "../stateConstants";

export default function changeFullCardMode(fullCardMode){
    return {
        type: FULL_CARD_MODE,
        fullCardMode: fullCardMode
    }
}
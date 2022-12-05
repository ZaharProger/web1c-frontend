import { MODAL_STATE } from "../stateConstants";

export default function changeModalState(modalState){
    return {
        type: MODAL_STATE,
        modalState: modalState
    }
}
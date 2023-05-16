import { useLocation, useNavigate } from "react-router-dom";
import useRedux from "./useRedux";
import {CARDS, FULL_CARD_MODE, RELATED_AGREEMENTS, RELATED_EVENTS} from "../state-manager/stateConstants";
import {FULL_CARD_MODES} from "../globalConstants";

export default function useRedirection(){
    const navigate = useNavigate();
    const location = useLocation();

    const updateCards = useRedux(CARDS);
    const updateFullCardMode = useRedux(FULL_CARD_MODE);
    const updateRelatedEvents = useRedux(RELATED_EVENTS);
    const updateRelatedAgreements = useRedux(RELATED_AGREEMENTS);

    //Хук возвращает функцию, в которой проверяем: если текущий роут не совпадает с целевым, то перенаправляем. 
    return function(route, preventSameRender=true){
        updateCards(Array());
        updateFullCardMode(FULL_CARD_MODES.main);
        updateRelatedEvents(Array());
        updateRelatedAgreements(Array());

        if (preventSameRender) {
            if (location.pathname != route) {
                navigate(route);
            }
        }
        else {
            navigate(route);
        }
    }
}
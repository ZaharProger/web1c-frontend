import { useLocation, useNavigate } from "react-router-dom";
import useRedux from "./useRedux";
import {CARDS, PREV_ROUTE} from "../state-manager/stateConstants";

export default function useRedirection(){
    const navigate = useNavigate();
    const location = useLocation();

    const updateCards = useRedux(CARDS);
    const updatePrevRoute = useRedux(PREV_ROUTE);

    //Хук возвращает функцию, в которой проверяем: если текущий роут не совпадает с целевым, то перенаправляем. 
    return function(route, preventSameRender=true){
        updateCards(Array());
        updatePrevRoute(location.pathname);

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
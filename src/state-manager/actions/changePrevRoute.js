import { PREV_ROUTE } from "../stateConstants";

export default function changePrevRoute(prevRoute){
    return {
        type: PREV_ROUTE,
        prevRoute: prevRoute
    }
}
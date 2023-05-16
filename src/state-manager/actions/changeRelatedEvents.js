import { RELATED_EVENTS } from "../stateConstants";

export default function changeRelatedEvents(events){
    return {
        type: RELATED_EVENTS,
        relatedEvents: events
    }
}
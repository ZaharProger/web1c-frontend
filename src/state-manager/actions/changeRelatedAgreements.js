import { RELATED_AGREEMENTS } from "../stateConstants";

export default function changeRelatedAgreements(agreements) {
    return {
        type: RELATED_AGREEMENTS,
        relatedAgreements: agreements
    }
}
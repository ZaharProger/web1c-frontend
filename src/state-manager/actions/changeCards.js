import { CARDS } from "../stateConstants";

export default function changeCards(cards){
    return {
        type: CARDS,
        cards: cards
    }
}
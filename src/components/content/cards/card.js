import React from "react";
import '../../../styles/card.css';
import useRedirection from "../../../hooks/useRedirection";
import {FIELDS, FULL_CARD_MODES, ROUTES} from "../../../globalConstants";
import {useLayout} from "../../../hooks/useLayout";

export default function Card(props) {
    const redirect = useRedirection()
    const { route, mode } = props.card_props

    let template = []

    if (route.includes(ROUTES.debtors)) {
        switch (mode) {
            case FULL_CARD_MODES.related_events:
                template = FIELDS.short.event_card_short
                break;
            case FULL_CARD_MODES.related_agreements:
                template = FIELDS.short.debtor_contract_card_short
                break;
            default:
                template = FIELDS.short.debtor_card_short
                break;
        }
    }
    else if (route.includes(ROUTES.debtor_contracts)) {
        template = mode === FULL_CARD_MODES.related_events?
            FIELDS.short.event_card_short
            :
            FIELDS.short.debtor_contract_card_short
    }
    else if (route.includes(ROUTES.events)) {
        template = FIELDS.short.event_card_short
    }

    const fields = useLayout(template)
    return (
        <div className="Card d-flex flex-column m-3"
             onClick={ () => redirect(route) }>
            {
                fields
            }
        </div>
    );
}
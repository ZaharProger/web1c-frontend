import React from "react";
import '../../../styles/card.css';
import useRedirection from "../../../hooks/useRedirection";
import {FIELDS, ROUTES} from "../../../globalConstants";
import {useLayout} from "../../../hooks/useLayout";

export default function Card(props) {
    const redirect = useRedirection()

    let template = []
    if (props.route.includes(ROUTES.debtors)) {
        template = FIELDS.short.debtor_card_short
    }
    else if (props.route.includes(ROUTES.debtor_contracts)) {
        template = FIELDS.short.debtor_contract_card_short
    }
    else if (props.route.includes(ROUTES.events)) {
        template = FIELDS.short.event_card_short
    }

    const fields = useLayout(template)
    return (
        <div className="Card d-flex flex-column m-3"
             onClick={ () => redirect(props.route) }>
            {
                fields
            }
        </div>
    );
}
import React, {useContext, useEffect} from "react";

import "../../../styles/fullCard.css";
import {useLayout} from "../../../hooks/useLayout";
import {BUTTONS, FULL_CARD_MODES} from "../../../globalConstants";
import {appContext} from "../../../contexts";
import {useSelector} from "react-redux";

export default function FullCard(props) {
    const buttons = useLayout(BUTTONS.full_card)
    const fields = useLayout(props.full_card_props.template)
    const { theme } = useContext(appContext)
    const fullCardMode = useSelector(state => state.fullCardMode)

    useEffect(() => {
        let buttonCounter = 0
        const buttons = document.querySelector('.full-card-buttons')
            .querySelectorAll('button')

        buttons.forEach(cardButton => {
            if ((fullCardMode === FULL_CARD_MODES.main && buttonCounter == 1) ||
                (fullCardMode === FULL_CARD_MODES.related_events && buttonCounter == 2) ||
                (fullCardMode === FULL_CARD_MODES.related_agreements && buttonCounter == 3)) {

                cardButton.classList.add('clicked')
            }

            cardButton.onclick = () => {
                let eventCounter = 0
                document.querySelector('.full-card-buttons')
                    .querySelectorAll('button').forEach( button => {
                        button.classList.remove('clicked')
                    })
                if (eventCounter != 0) {
                    cardButton.classList.add('clicked')
                }

                ++eventCounter
            }

            ++buttonCounter
        })

        const fullCardFields = document.querySelector('.full-card-fields')
        if (fullCardFields !== null) {
            fullCardFields.querySelectorAll('input').forEach(input => {
                if (input.type == 'datetime-local') {
                    input.style.colorScheme = theme? 'dark' : 'light'
                }
            })
        }

    }, [fullCardMode, buttons])

    const isMain = fullCardMode === FULL_CARD_MODES.main

    return (
        <div className="Full-card d-flex flex-column mb-2 me-auto ms-auto">
            <div className="full-card-buttons d-flex mb-3 mt-3 me-auto ms-auto">{ buttons }</div>
            <div className={`d-flex ${isMain? 'flex-column' : 'flex-row flex-wrap'}`}>
                {
                    isMain?
                        <div className="full-card-fields d-flex flex-column p-4">{ fields }</div> :
                        props.full_card_props.content_callback(fullCardMode)
                }
            </div>
        </div>
    )
}
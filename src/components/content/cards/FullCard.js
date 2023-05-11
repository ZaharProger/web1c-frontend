import React, {useContext, useEffect} from "react";

import "../../../styles/fullCard.css";
import {useLayout} from "../../../hooks/useLayout";
import {BUTTONS} from "../../../globalConstants";
import {appContext} from "../../../contexts";

export default function FullCard(props) {
    const buttons = useLayout(BUTTONS.full_card)
    const fields = useLayout(props.template)

    const isDarkTheme = useContext(appContext).theme

    useEffect(() => {
        document.querySelector('.full-card-buttons')
            .querySelectorAll('button').forEach(cardButton => {
                cardButton.onclick = () => {
                    document.querySelector('.full-card-buttons')
                        .querySelectorAll('button').forEach( button => {
                        button.classList.remove('clicked')
                    })
                    cardButton.classList.add('clicked')
                }
        })

        document.querySelector('.full-card-fields')
            .querySelectorAll('input').forEach(input => {
                if (input.type == 'datetime-local') {
                    input.style.colorScheme = isDarkTheme? 'dark' : 'light'
                }
        })
    }, [])

    return (
        <div className="Full-card d-flex flex-column mb-2">
            <div className="full-card-buttons d-flex mb-3 mt-3">{ buttons }</div>
            <div className="full-card-fields d-flex flex-column p-4">{ fields }</div>
        </div>
    )
}
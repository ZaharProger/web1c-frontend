import React, {useCallback, useContext} from "react";
import {useLocation, useParams} from "react-router-dom";

import Card from "./cards/card";
import FloatingButton from "./chatbot/floatingButton";
import ChatBot from "./chatbot/chatBot";
import {FIELDS, ROUTES} from "../../globalConstants";
import SettingsForm from "./settings/settingsForm";
import DebtorCard from "./cards/debtorCard";
import DebtorContract from "./cards/debtorContract";
import EventRecord from "./cards/eventRecord";
import FullCard from "./cards/FullCard";
import {appContext} from "../../contexts";

const Content = () => {
    const location = useLocation()
    const params = useParams()
    const { chatbot_state, is_mobile_screen } = useContext(appContext)

    const getCards = useCallback(() => {
        const cards = []

        cards.push(<Card route={ `${ROUTES.debtors}/11` }><DebtorCard/></Card>)
        cards.push(<Card route={ `${ROUTES.debtor_contracts}/11` }><DebtorContract/></Card>)
        cards.push(<Card route={ `${ROUTES.events}/11` }><EventRecord/></Card>)

        return cards
    }, [])

    const defineCardTemplate = useCallback(() => {
        let cardTemplate = null

        if (location.pathname.includes(ROUTES.debtors)){
            cardTemplate = FIELDS.debtor_card
        }
        else if (location.pathname.includes(ROUTES.debtor_contracts)) {
            cardTemplate = FIELDS.debtor_contract_card
        }
        else if(location.pathname.includes(ROUTES.events)) {
            cardTemplate = FIELDS.event_card
        }

        return cardTemplate
    }, [location.pathname])

    let contentData
    if (location.pathname === ROUTES.settings) {
        contentData = <SettingsForm />
    }
    else if (params.id !== undefined) {
        contentData = <FullCard template={ defineCardTemplate() } />
    }
    else {
        contentData = getCards()
    }

    return (
        <div id="Content" className={ `d-flex flex-column w-100 mt-5 
        ${ is_mobile_screen? 'pe-0 ps-0 pb-0 pt-5' : 'p-5' }` }>
            {
                contentData
            }
            {
                chatbot_state? <ChatBot /> : <FloatingButton />
            }
        </div>
    )
}

export default Content
import React, {useCallback, useContext, useEffect} from "react";

import Header from '../header/Header';
import Content from "./content";
import Footer from "../footer/Footer";
import {API, FULL_CARD_MODES, ROUTES, SERVER_ERROR_MESSAGE} from "../../globalConstants";
import useApi from "../../hooks/useApi";
import useRedux from "../../hooks/useRedux";
import {
    CARDS,
    FULL_CARD_MODE,
    MODAL_STATE,
    RELATED_AGREEMENTS,
    RELATED_EVENTS
} from "../../state-manager/stateConstants";
import {useLocation, useParams} from "react-router-dom";
import Card from "./cards/card";
import {appContext} from "../../contexts";
import {useSelector} from "react-redux";

const ContentWrap = () => {
    const location = useLocation()
    const performApiCall = useApi()
    const currentParamValue = useParams().id
    const hasParam = currentParamValue !== undefined

    const { chatbot_state, is_mobile_screen, cards: cardsData, full_card_mode: fullCardMode } = useContext(appContext)

    const updateCards = useRedux(CARDS)
    const updateEvents = useRedux(RELATED_EVENTS)
    const updateAgreements = useRedux(RELATED_AGREEMENTS)
    const updateModalInfo = useRedux(MODAL_STATE)
    const updateFullCardMode = useRedux(FULL_CARD_MODE)

    const refreshFlag = useSelector(state => state.refreshFlag)
    const relatedEvents = useSelector(state => state.relatedEvents)
    const relatedAgreements = useSelector(state => state.relatedAgreements)

    const getCards = useCallback((cardMode, collection) => {
        const cards = []
        for (let i = 0; collection !== null && i < collection.length; ++i) {
            cards.push(
                <Card key={`Card_${i + 1}`} card_props={{
                    route: collection[i].route,
                    mode: cardMode
                }}/>
            )
        }

        return cards
    }, [cardsData, fullCardMode])

    useEffect(() => {
        const task = async () => {
            const isMain = location.pathname === ROUTES.main

            let params = `${API.params.type}=${isMain? 2 : hasParam? 4 : 1}`
            if (hasParam) {
                params += `&${API.params.key}=${currentParamValue}`
            }

            let finalEndpoint = isMain? ROUTES.history : location.pathname
            if (currentParamValue !== undefined) {
                finalEndpoint = finalEndpoint
                    .split('/')
                    .slice(0, 3)
                    .join('/')
            }

            const response = await performApiCall(
                `/api${finalEndpoint}?${params}`,
                API.methods.get
            )

            return response.ok?
                () => {
                    updateCards(response.responseBody.data)

                    const responseKeys = Object.keys(response.responseBody)
                    if (responseKeys.includes('relatedEvents')) {
                        updateEvents(response.responseBody.relatedEvents)
                    }
                    if (responseKeys.includes('relatedAgreements')) {
                        updateAgreements(response.responseBody.relatedAgreements)
                    }
                }
                :
                () => updateModalInfo({
                    isActive: true,
                    message: SERVER_ERROR_MESSAGE
                })
        }

        if (!hasParam) {
            updateFullCardMode(FULL_CARD_MODES.main)
        }

        if (location.pathname !== ROUTES.settings) {
            updateEvents(Array())
            updateAgreements(Array())
            updateCards(Array())

            task().then((callback) => callback())
        }
    }, [location.pathname, hasParam, refreshFlag])

    return (
        <div id="Content-wrap" className="d-flex flex-column w-100">
            <Content content_props={{
                has_param: hasParam,
                cards: cardsData,
                related_events: relatedEvents,
                related_agreements: relatedAgreements,
                card_mode: fullCardMode,
                callback: (cardMode, collection) => getCards(cardMode, collection)
            }} />
            <Footer />
            {
                chatbot_state && is_mobile_screen? null : <Header />
            }
        </div>
    );
}
export default ContentWrap;
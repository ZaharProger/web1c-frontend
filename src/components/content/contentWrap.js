import React, {useCallback, useEffect} from "react";

import Header from '../header/Header';
import Content from "./content";
import Footer from "../footer/Footer";
import {API, ROUTES, SERVER_ERROR_MESSAGE} from "../../globalConstants";
import useApi from "../../hooks/useApi";
import useRedux from "../../hooks/useRedux";
import {CARDS, MODAL_STATE} from "../../state-manager/stateConstants";
import {useLocation} from "react-router-dom";
import useQuery from "../../hooks/useQuery";
import {useSelector} from "react-redux";
import Card from "./cards/card";

const ContentWrap = () => {
    const location = useLocation()
    const performApiCall = useApi()
    const query = useQuery()

    const currentParamValue = query.get("Key")
    const hasParam = currentParamValue !== null

    const updateCards = useRedux(CARDS)
    const updateModalInfo = useRedux(MODAL_STATE)

    const cardsData = useSelector(state => state.cards)

    const getCards = useCallback(() => {
        const cards = []

        for (let i = 0; cardsData !== null && i < cardsData.length; ++i) {
            cards.push(
                <Card key={`Card_${i + 1}`} route={cardsData[i].route}/>
            )
        }

        return cards
    }, [cardsData])

    useEffect(() => {
        const task = async () => {
            const isMain = location.pathname === ROUTES.main

            let params = `${API.params.type}=${isMain? 3 : hasParam? 2 : 1}`
            if (hasParam) {
                params += `&${API.params.key}=${currentParamValue}`
            }

            const response = await performApiCall(
                `/api${isMain? ROUTES.history : location.pathname}?${params}`,
                API.methods.get
            )

            return response.ok?
                () => updateCards(response.responseBody.data)
                :
                () => updateModalInfo({
                    isActive: true,
                    message: SERVER_ERROR_MESSAGE
                })
        }

        if (location.pathname !== ROUTES.settings) {
            task().then((callback) => callback())
        }
    }, [location.pathname, hasParam])

    return (
        <div id="Content-wrap" className="d-flex flex-column w-100">
            <Content content_props={{
                has_param: hasParam,
                cards: cardsData,
                callback: () => getCards()
            }} />
            <Footer />
            <Header />
        </div>
    );
}
export default ContentWrap;
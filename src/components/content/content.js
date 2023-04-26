import React, {useCallback, useContext, useEffect} from "react";
import {useLocation, useParams} from "react-router-dom";

import Card from "./cards/card";
import FloatingButton from "./chatbot/floatingButton";
import ChatBot from "./chatbot/chatBot";
import {FIELDS, ROUTES} from "../../globalConstants";
import SettingsForm from "./settings/settingsForm";
import FullCard from "./cards/FullCard";
import {appContext} from "../../contexts";
import {useSelector} from "react-redux";
import MainPage from "./mainPage/MainPage";

const Content = () => {
    const location = useLocation()
    const params = useParams()

    const { chatbot_state, is_mobile_screen, theme } = useContext(appContext)

    const cardsData = useSelector(state => state.cards)

    const getCards = useCallback(() => {
        const cards = []

        for (let i = 0; i < cardsData.length; ++i) {
            cards.push(
                <Card key={ `Card_${i + 1}` }
                      route={`${location.pathname}/${cardsData[i][Object.keys(cardsData[i])[0]]}`} />
            )
        }

        return cards
    }, [cardsData])

    const defineCardTemplate = useCallback(() => {
        let cardTemplate = null

        if (location.pathname.includes(ROUTES.debtors)){
            cardTemplate = FIELDS.long.debtor_card
        }
        else if (location.pathname.includes(ROUTES.debtor_contracts)) {
            cardTemplate = FIELDS.long.debtor_contract_card
        }
        else if(location.pathname.includes(ROUTES.events)) {
            cardTemplate = FIELDS.long.event_card
        }

        return cardTemplate
    }, [location.pathname])

    let contentData
    if (location.pathname === ROUTES.settings) {
        contentData = <SettingsForm />
    }
    else if (location.pathname === ROUTES.main) {
        contentData = <MainPage />
    }
    else if (params.id !== undefined) {
        contentData = <FullCard template={ defineCardTemplate() } />
    }
    else {
        contentData = getCards()
    }

    useEffect(() => {
        let keyOrder = []
        if (location.pathname.includes(ROUTES.debtors)){
            keyOrder = [2, 0, 1, 3]
        }
        else if (location.pathname.includes(ROUTES.debtor_contracts)) {
            keyOrder = [3, 0, 1, 2, 4]
        }
        else if(location.pathname.includes(ROUTES.events)) {
            keyOrder = [1, 0, 2, 3]
        }

        let cardCounter = 0
        document.querySelectorAll('.Card').forEach(card => {
            const cardsKeys = Object.keys(cardsData[cardCounter]).filter(key => {
                return ![null, false, true, 0].includes(cardsData[cardCounter][key])
            })

            let keyCounter = 0
            card.querySelectorAll('span').forEach(item => {
                item.style.color = theme? '#FFFFFF' : '#212529'

                const itemKey = cardsKeys[keyOrder[keyCounter]]
                const isDate = itemKey.toLowerCase().includes('date')
                const itemValue = isDate? new Date(cardsData[cardCounter][itemKey] * 1000).toLocaleString() :
                    cardsData[cardCounter][itemKey]

                item.innerText = `${item.innerText.split(':\xa0\xa0')[0]}:\xa0\xa0${itemValue}`

                ++keyCounter
            })

            ++cardCounter
        })
    }, [cardsData])

    return (
        <div id="Content" className={ `d-flex flex-row flex-wrap w-100 mt-5 mb-5
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
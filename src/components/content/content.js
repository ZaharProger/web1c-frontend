import React, {useCallback, useContext, useEffect} from "react";
import {useLocation} from "react-router-dom";

import Card from "./cards/card";
import FloatingButton from "./chatbot/floatingButton";
import ChatBot from "./chatbot/chatBot";
import {FIELDS, ROUTES} from "../../globalConstants";
import SettingsForm from "./settings/settingsForm";
import FullCard from "./cards/FullCard";
import {appContext} from "../../contexts";
import {useSelector} from "react-redux";
import MainPage from "./mainPage/MainPage";
import {parseDate} from "../../utils";

const Content = (props) => {
    const location = useLocation()

    const { chatbot_state, is_mobile_screen, theme } = useContext(appContext)

    const cardsData = useSelector(state => state.cards)

    const getCards = useCallback(() => {
        const cards = []

        for (let i = 0; i < cardsData.length; ++i) {
            cards.push(
                <Card key={ `Card_${i + 1}` } route={ cardsData[i].route } />
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
    else if (props.has_param) {
        contentData = <FullCard template={ defineCardTemplate() } />
    }
    else {
        contentData = getCards()
    }

    useEffect(() => {
        let cardCounter = 0

        if (props.has_param) {
            let filterIterator = -1
            const cardKeys = Object.keys(cardsData[cardCounter]).filter(cardKey => {
                ++filterIterator
                return !cardKey.includes("id") || (cardKey.includes("id") && filterIterator == 1)
            })

            let keyCounter = 1

            document.querySelectorAll('.Full-card-item').forEach(fullCardItem => {
                const input = fullCardItem.querySelector('input, label')
                const itemKey = cardKeys[keyCounter]

                if (input.type == 'text') {
                    input.value = cardsData[0][itemKey]
                }
                else if (input.type == 'datetime-local') {
                    input.value = parseDate(new Date(cardsData[0][itemKey] * 1000), true)
                }
                else if (input.type == 'checkbox') {
                    input.checked = cardsData[0][itemKey]
                }
                else {
                    input.innerHTML = new Date(cardsData[0][itemKey]).toString() == 'Invalid Date'?
                        cardsData[0][itemKey]
                        :
                        parseDate(new Date(cardsData[0][itemKey] * 1000))
                }

                ++keyCounter
            })
        }
        else {
            let keyOrder = []
            if (location.pathname.includes(ROUTES.debtors)){
                keyOrder = [3, 1, 2, 4]
            }
            else if (location.pathname.includes(ROUTES.debtor_contracts)) {
                keyOrder = [5, 1, 2, 4]
            }
            else if(location.pathname.includes(ROUTES.events)) {
                keyOrder = [2, 1, 3, 4]
            }

            document.querySelectorAll('.Card').forEach(card => {
                const cardKeys = Object.keys(cardsData[cardCounter]).filter(key => {
                    return ![null, false, true].includes(cardsData[cardCounter][key])
                })
                let keyCounter = 0

                card.querySelectorAll('span').forEach(item => {
                    item.style.color = theme? '#FFFFFF' : '#212529'

                    const itemKey = cardKeys[keyOrder[keyCounter]]
                    const isDate = itemKey.toLowerCase().includes('date')
                    const itemValue = isDate?
                        parseDate(new Date(cardsData[cardCounter][itemKey] * 1000)) :
                        cardsData[cardCounter][itemKey]

                    item.innerText = `${item.innerText.split(':\xa0\xa0')[0]}:\xa0\xa0${itemValue}`

                    ++keyCounter
                })

                ++cardCounter
            })
        }
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
import React, {useCallback, useContext, useEffect} from "react";
import {useLocation} from "react-router-dom";

import FloatingButton from "./chatbot/floatingButton";
import ChatBot from "./chatbot/chatBot";
import {FIELDS, ROUTES} from "../../globalConstants";
import SettingsForm from "./settings/settingsForm";
import FullCard from "./cards/FullCard";
import {appContext} from "../../contexts";
import MainPage from "./mainPage/MainPage";
import {parseDate} from "../../utils";

const Content = (props) => {
    const location = useLocation()
    const { chatbot_state, is_mobile_screen, theme } = useContext(appContext)

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

    const { has_param, cards, callback } = props.content_props

    let contentData
    if (location.pathname === ROUTES.settings) {
        contentData = <SettingsForm />
    }
    else if (location.pathname === ROUTES.main) {
        contentData = <MainPage callback={ callback } />
    }
    else if (has_param) {
        contentData = <FullCard template={ defineCardTemplate() } />
    }
    else {
        contentData = callback()
    }

    useEffect(() => {
        const mainPage = document.getElementById('Main-page')
        if (mainPage !== null) {
            mainPage.querySelectorAll('p').forEach(text => {
                text.style.color = theme? '#FFFFFF' : '#212529'
            })
        }

        let cardCounter = 0

        if (has_param && cards.length != 0) {
            let filterIterator = -1
            const cardKeys = Object.keys(cards[cardCounter]).filter(cardKey => {
                ++filterIterator
                return !cardKey.includes("id") || (cardKey.includes("id") && filterIterator == 1)
            })

            let keyCounter = 1

            document.querySelectorAll('.Full-card-item').forEach(fullCardItem => {
                const input = fullCardItem.querySelector('input, label')
                const itemKey = cardKeys[keyCounter]

                if (input.type == 'datetime-local') {
                    input.value = parseDate(new Date(cards[0][itemKey] * 1000), true)
                }
                else if (input.type == 'checkbox') {
                    input.checked = cards[0][itemKey]
                }
                else {
                    if (input.parentElement.classList.contains('ref-item') || input.type == 'text') {
                        input.value = cards[0][itemKey]
                    }
                    else {
                        input.innerHTML = cards[0][itemKey]
                    }
                }

                ++keyCounter
            })
        }
        else if (cards.length != 0) {
            document.querySelectorAll('.Card').forEach(card => {
                let keyOrder = []
                if (cards[cardCounter].route.includes(ROUTES.debtors)){
                    keyOrder = [3, 1, 2, 4]
                }
                else if (cards[cardCounter].route.includes(ROUTES.debtor_contracts)) {
                    keyOrder = [5, 1, 2, 4]
                }
                else if(cards[cardCounter].route.includes(ROUTES.events)) {
                    keyOrder = [2, 1, 3, 4]
                }

                const cardKeys = Object.keys(cards[cardCounter]).filter(key => {
                    return ![null, false, true].includes(cards[cardCounter][key])
                })
                let keyCounter = 0

                card.querySelectorAll('span').forEach(item => {
                    item.style.color = theme? '#FFFFFF' : '#212529'

                    const itemKey = cardKeys[keyOrder[keyCounter]]
                    const isDate = itemKey.toLowerCase().includes('date')
                    const itemValue = isDate?
                        parseDate(new Date(cards[cardCounter][itemKey] * 1000)) :
                        cards[cardCounter][itemKey]

                    item.innerText = `${item.innerText.split(':\xa0\xa0')[0]}:\xa0\xa0${itemValue}`

                    ++keyCounter
                })

                ++cardCounter
            })
        }
    }, [cards])

    return (
        <div id="Content" className={ `d-flex flex-row flex-wrap w-100 mt-5 mb-5
        ${ is_mobile_screen? 'pe-0 ps-0 pb-0 pt-5' : 'pt-5' }` }>
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
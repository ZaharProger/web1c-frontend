import React, {useCallback, useContext, useEffect} from "react";
import {useLocation} from "react-router-dom";

import FloatingButton from "./chatbot/floatingButton";
import ChatBot from "./chatbot/chatBot";
import {FIELDS, FULL_CARD_MODES, ROUTES} from "../../globalConstants";
import SettingsForm from "./settings/settingsForm";
import FullCard from "./cards/FullCard";
import {appContext} from "../../contexts";
import MainPage from "./mainPage/MainPage";
import {parseDate} from "../../utils";
import EmptyListMessage from "./EmptyListMessage";

const Content = (props) => {
    const location = useLocation()
    const { chatbot_state, is_mobile_screen, theme } = useContext(appContext)
    const { has_param, cards, related_events, related_agreements, card_mode, callback } = props.content_props

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

    const updateCardsList = useCallback((cardCounter, collection) => {
        document.querySelectorAll('.Card').forEach(card => {
            let keyOrder = []
            if (collection[cardCounter].route.includes(ROUTES.debtors)){
                keyOrder = [3, 1, 2, 4]
            }
            else if (collection[cardCounter].route.includes(ROUTES.debtor_contracts)) {
                keyOrder = [4, 1, 2, 3]
            }
            else if(collection[cardCounter].route.includes(ROUTES.events)) {
                keyOrder = [2, 1, 3]
            }

            const cardKeys = Object.keys(collection[cardCounter]).filter(key => {
                return ![null, false, true].includes(collection[cardCounter][key])
            })
            let keyCounter = 0

            card.querySelectorAll('span').forEach(item => {
                item.style.color = theme? '#FFFFFF' : '#212529'

                const itemKey = cardKeys[keyOrder[keyCounter]]
                const isDate = itemKey.toLowerCase().includes('date')
                const itemValue = isDate?
                    parseDate(new Date(collection[cardCounter][itemKey] * 1000)) :
                    collection[cardCounter][itemKey]

                item.innerText = `${item.innerText.split(':\xa0\xa0')[0]}:\xa0\xa0${itemValue}`

                ++keyCounter
            })

            ++cardCounter
        })
    }, [card_mode, cards, related_events, related_agreements])
    const updateCard = useCallback((cardCounter) => {
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
    }, [cards, card_mode])
    const getContentData = useCallback(() => {
        let collection
        switch (card_mode) {
            case FULL_CARD_MODES.main:
                collection = cards
                break;
            case FULL_CARD_MODES.related_events:
                collection = related_events
                break;
            default:
                collection = related_agreements
                break;
        }

        let contentData
        if (location.pathname === ROUTES.settings) {
            contentData = <SettingsForm />
        }
        else if (location.pathname === ROUTES.main) {
            contentData = <MainPage callback={ () => callback(card_mode, collection) } />
        }
        else if (has_param) {
            contentData = <FullCard full_card_props={{
                template: defineCardTemplate(),
                content_callback: (cardMode) => callback(cardMode, collection)
            }} />
        }
        else {
            const cards = callback(card_mode, collection)
            contentData = cards.length == 0? <EmptyListMessage /> : cards
        }

        return contentData
    }, [location.pathname, cards, related_events, related_agreements, card_mode])

    useEffect(() => {
        const mainPage = document.getElementById('Main-page')
        if (mainPage !== null) {
            mainPage.querySelectorAll('p').forEach(text => {
                text.style.color = theme? '#FFFFFF' : '#212529'
            })
        }
        const emptyListMessage = document.getElementById('Empty-list-message')
        if (emptyListMessage !== null) {
            emptyListMessage.querySelector('span').style.color = theme? '#FFFFFF' : '#212529'
        }

        let cardCounter = 0

        if (has_param && cards.length != 0) {
            switch (card_mode) {
                case FULL_CARD_MODES.main:
                    updateCard(cardCounter)
                    break;
                case FULL_CARD_MODES.related_events:
                    updateCardsList(cardCounter, related_events)
                    break;
                default:
                    updateCardsList(cardCounter, related_agreements)
                    break;
            }
        }
        else if (cards.length != 0) {
            updateCardsList(cardCounter, cards)
        }
    }, [cards, card_mode, related_events, related_agreements])

    return (
        <div id="Content" className={ `d-flex flex-row flex-wrap w-100 mt-5 mb-5
        ${ is_mobile_screen? 'pe-0 ps-0 pb-0 pt-5' : 'pt-5' }` }>
            {
                getContentData()
            }
            {
                chatbot_state? <ChatBot /> : <FloatingButton />
            }
        </div>
    )
}

export default Content
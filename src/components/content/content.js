import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import Card from "./cards/card";
import FloatingButton from "./chatbot/floatingButton";
import ChatBot from "./chatbot/chatBot";
import { ROUTES } from "../../globalConstants";
import SettingsForm from "./settings/settingsForm";
import DebtorCard from "./cards/debtorCard";
import DebtorContract from "./cards/debtorContract";
import EventRecord from "./cards/eventRecord";

const Content = () => {
    const location = useLocation()
    const currentChatBotState = useSelector(state => state.chatBotState)
    
    const getCards = () => {
        const cards = []

        function randomNumberInRange(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        
        for (let i = 0; i < 30; ++i) {
            switch (randomNumberInRange(0, 2)) {

                case 0:
                    cards.push(<Card key={i}><DebtorCard /></Card>)
                    break;

                case 1:
                    cards.push(<Card key={i}><DebtorContract /></Card>)
                    break;

                case 2:
                    cards.push(<Card key={i}><EventRecord /></Card>)
                    break;
            }
        }
        return cards
    }

    return (
        <div id="Content" className="d-flex flex-wrap w-100 p-5 mt-4 text-white">
            {
                location.pathname === ROUTES.settings ?
                    <SettingsForm />
                    :
                    getCards()
            }
            {
                currentChatBotState ? <ChatBot /> : <FloatingButton />
            }
        </div>
    )
}

export default Content
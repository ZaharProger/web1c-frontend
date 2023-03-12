import React from "react";
import {useSelector} from "react-redux";
import {useLocation} from "react-router-dom";

import Card from "./cards/card";
import FloatingButton from "./chatbot/floatingButton";
import ChatBot from "./chatbot/chatBot";
import {ROUTES} from "../../globalConstants";
import SettingsForm from "./settings/settingsForm";

const Content = () => {
    const location = useLocation()
    const currentChatBotState = useSelector(state => state.chatBotState)

    const getCards = () => {
        const cards = []
        for (let i = 0; i < 30; ++i) {
            cards.push(
                <Card key={ i }>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Molestie ac feugiat sed lectus vestibulum. Viverra tellus i
                    n hac habitasse platea. Sed sed risus pretium quam vulputate dignissim suspendisse. Massa ul
                    tricies mi quis hendrerit dolor magna eget est. At varius vel pharetra vel. Non tellus orci ac au
                    ctor augue mauris. Fermentum iaculis eu non diam phasellus vestibulum lorem sed risus. Feugiat s
                    ed lectus vestibulum mattis. Scelerisque felis im
                    perdiet proin fermentum leo. Sagittis orci a scelerisque purus semper eget duis. Vel
                    quam elementum pulvinar etiam non quam lacus.</Card>
            )
        }

        return cards
    }

    return (
        <div id="Content" className="d-flex flex-column w-100 p-5 mt-4">
            {
                location.pathname === ROUTES.settings?
                    <SettingsForm />
                    :
                    getCards()
            }
            {
                currentChatBotState? <ChatBot /> : <FloatingButton />
            }
        </div>
    )
}

export default Content
import React, {useEffect} from "react";

import Header from '../header/Header';
import Content from "./content";
import Footer from "../footer/Footer";
import {API, ROUTES, SERVER_ERROR_MESSAGE} from "../../globalConstants";
import useApi from "../../hooks/useApi";
import useRedux from "../../hooks/useRedux";
import {CARDS, MODAL_STATE} from "../../state-manager/stateConstants";
import {useLocation} from "react-router-dom";

const ContentWrap = () => {
    const location = useLocation()
    const performApiCall = useApi()

    const updateCards = useRedux(CARDS)
    const updateModalInfo = useRedux(MODAL_STATE)

    useEffect(() => {
        const task = async () => {
            const response = await performApiCall(`/api${location.pathname}`, API.methods.get)

            return response.ok?
                () => updateCards(response.responseBody.data)
                :
                () => updateModalInfo({
                    isActive: true,
                    message: SERVER_ERROR_MESSAGE
                })
        }

        if (location.pathname !== ROUTES.main && location.pathname !== ROUTES.settings) {
            task().then((callback) => callback())
        }
    }, [location.pathname])

    return (
        <div id="Content-wrap" className="d-flex flex-column w-100">
            <Content />
            <Footer />
            <Header />
        </div>
    );
}
export default ContentWrap;
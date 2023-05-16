import React from "react";

import useRedirection from "./useRedirection";
import useApi from "./useApi";
import useRedux from "./useRedux";
import {API, BUTTONS, FIELDS, FULL_CARD_MODES, ROUTES, SERVER_ERROR_MESSAGE} from "../globalConstants";
import {FULL_CARD_MODE, MODAL_STATE, SUBMENU_STATE} from "../state-manager/stateConstants";
import NavbarListItem from "../components/header/NavbarListItem";
import SubMenuItem from "../components/header/SubMenuItem";
import SettingsItem from "../components/content/settings/settingsItem";
import FullCardItem from "../components/content/cards/FullCardItem";
import {useSelector} from "react-redux";
import CardItem from "../components/content/cards/CardItem";

export function useLayout(template) {
    const redirect = useRedirection()
    const performApiCall = useApi()

    const updateModalInfo = useRedux(MODAL_STATE)
    const updateSubMenuState = useRedux(SUBMENU_STATE)
    const updateFullCardMode = useRedux(FULL_CARD_MODE)

    const mobileMenuState = useSelector(state => state.mobileMenuState)
    const hasRelatedEvents = useSelector(state => state.relatedEvents).length != 0
    const hasRelatedAgreements = useSelector(state => state.relatedAgreements).length != 0

    const layoutItems = []

    for (let i = 0; i < template.length; ++i) {
        if (template === BUTTONS.navbar) {
            const { icon, caption, route } = template[i]

            let callback = null
            switch (route) {
                case ROUTES.auth:
                    callback = async () => {
                        const { ok } = await performApiCall('/api/Users', API.methods.delete)
                        if (ok) {
                            redirect(route)
                        }
                        else {
                            updateModalInfo({
                                isActive: true,
                                message: SERVER_ERROR_MESSAGE
                            })
                        }
                    }
                    break
                case ROUTES.settings:
                    callback = () => redirect(route)
                    break
            }

            layoutItems.push(<NavbarListItem key={ `Navbar-list-item_${i}` } item_data={{
                callback,
                icon: mobileMenuState? icon : null,
                caption,
                item_index: i,
                is_sign_out: route === ROUTES.auth
            }} />)
        }
        else if (template === BUTTONS.full_card) {
            const callbacks = [
                () => redirect(-1, false),
                () => updateFullCardMode(FULL_CARD_MODES.main),
                () => updateFullCardMode(FULL_CARD_MODES.related_events),
                () => updateFullCardMode(FULL_CARD_MODES.related_agreements)
            ]

            const key = `Full-card-button_${i}`
            const buttonClass = `d-flex me-${i == template.length - 1? '0' : '5'}`

            let allowToRender = true
            if (i == 2 || i == 3) {
                allowToRender = (hasRelatedEvents && hasRelatedAgreements) ||
                    (hasRelatedEvents && i == 2) ||
                    (hasRelatedAgreements && i == 3)
            }

            if (allowToRender) {
                layoutItems.push(<button key={ key } className={ buttonClass } onClick={
                    () => callbacks[i]() }>{ template[i].caption
                }</button>)
            }
        }
        else if (template === FIELDS.settings) {
            layoutItems.push(
                <SettingsItem  key={ `Settings-item_${i}` } data={ template[i] } />
            )
        }
        else if ([FIELDS.long.debtor_contract_card, FIELDS.long.debtor_card,
            FIELDS.long.event_card].includes(template)) {

            layoutItems.push(<FullCardItem key={ `Full-card-item_${i}` } data={{
                data: template[i],
                isLastItem: i == template.length - 1
            }} />)
        }
        else if ([FIELDS.short.debtor_contract_card_short, FIELDS.short.debtor_card_short,
            FIELDS.short.event_card_short].includes(template)) {

            const isDate = template[i].toLowerCase().includes('дата')
            const fieldMargins = `${isDate? 'mb-2 ms-auto' : 'mb-2 ms-0'}`

            layoutItems.push(<CardItem key={ `Card-item_${i}` } data={{
                field_margins: fieldMargins,
                item_name: template[i]
            }} />)
        }
        else {
            const { caption, route } = template[i]
            let callback = () => {
                updateSubMenuState(-1)
                redirect(route, false)
            }

            layoutItems.push(<SubMenuItem key={ `Submenu-item_${i}` } item_data={{
                callback,
                caption
            }}/>)
        }

    }

    return layoutItems
}
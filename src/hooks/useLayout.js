import React from "react";

import useRedirection from "./useRedirection";
import useApi from "./useApi";
import useRedux from "./useRedux";
import {API, BUTTONS, FIELDS, ROUTES, SERVER_ERROR_MESSAGE} from "../globalConstants";
import {MODAL_STATE, SUBMENU_STATE} from "../state-manager/stateConstants";
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

    const mobileMenuState = useSelector(state => state.mobileMenuState)

    const layoutItems = []

    for (let i = 0; i < template.length; ++i) {
        if (template === BUTTONS.navbar) {
            const { icon, caption, route } = template[i]

            let callback = null
            switch (route) {
                case ROUTES.auth:
                    callback = async () => {
                        const { ok } = await performApiCall(API.endpoints.users, API.methods.delete)
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
            const key = `Full-card-button_${i}`
            const buttonClass = `d-flex me-${i == template.length - 1? '0' : '5'}`

            layoutItems.push(<button key={ key } className={ buttonClass }
                                   onClick={ () => redirect(ROUTES.main) }>{ template[i].caption }</button>)
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
                redirect(route)
            }

            layoutItems.push(<SubMenuItem key={ `Submenu-item_${i}` } item_data={{
                callback,
                caption
            }}/>)
        }

    }

    return layoutItems
}
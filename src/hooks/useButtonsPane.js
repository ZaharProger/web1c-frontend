import {API, BUTTON_KEYS, PANE_TEMPLATES, SERVER_ERROR_MESSAGE} from "../globalConstants";
import useRedirection from "./useRedirection";
import useApi from "./useApi";
import useRedux from "./useRedux";
import {MODAL_STATE, SUBMENU_STATE} from "../state-manager/stateConstants";
import NavbarListItem from "../components/header/NavbarListItem";
import SubMenuItem from "../components/header/SubMenuItem";

export function useButtonsPane(template) {
    const redirect = useRedirection()
    const performApiCall = useApi()
    const updateModalInfo = useRedux(MODAL_STATE)
    const updateSubMenuState = useRedux(SUBMENU_STATE)

    const buttonsPane = []

    for (let i = 0; i < template.length; ++i) {
        if (template === PANE_TEMPLATES.navbar) {
            const { key, caption, route } = template[i]

            let callback = null
            switch (key) {
                case BUTTON_KEYS.sign_out_button:
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
                case BUTTON_KEYS.settings_button:
                    callback = () => redirect(route)
                    break
            }

            buttonsPane.push(<NavbarListItem key={ key } item_data={{
                callback,
                caption,
                item_index: i,
                is_sign_out: key === BUTTON_KEYS.sign_out_button
            }} />)
        }
        else {
            const { key, caption, route } = template[i]
            let callback = () => {
                updateSubMenuState(-1)
                redirect(route)
            }

            buttonsPane.push(<SubMenuItem key={ key } item_data={{
                callback,
                caption
            }}/>)
        }

    }

    return buttonsPane
}
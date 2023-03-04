import {API, BUTTON_KEYS, PANE_TEMPLATES, SERVER_ERROR_MESSAGE} from "../globalConstants";
import useRedirection from "./useRedirection";
import useApi from "./useApi";
import useRedux from "./useRedux";
import {MODAL_STATE} from "../state-manager/stateConstants";

export function useButtonsPane(template) {
    const redirect = useRedirection()
    const performApiCall = useApi()
    const updateModalInfo = useRedux(MODAL_STATE)

    const buttonsPane = []

    for (let i = 0; i < template.length; ++i) {
        if (template === PANE_TEMPLATES.navbar) {
            const { key, caption, route, sub_items } = template[i]

            let callback = key !== BUTTON_KEYS.sign_out_button? () => redirect(route) : async () => {
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

            buttonsPane.push(
                <div key={ key } className={ key === BUTTON_KEYS.sign_out_button?
                    'sign-out-item' : 'navbar-list-item' }>
                    <span onClick={ () => callback() }>{ caption }</span>
                </div>
            )
        }

    }

    return buttonsPane
}
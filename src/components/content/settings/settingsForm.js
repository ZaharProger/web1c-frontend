import React, {useEffect} from "react";
import '../../../styles/settings.css';
import {FIELDS, LOCAL_STORAGE_KEYS, THEME} from "../../../globalConstants";
import {useButtonsPane} from "../../../hooks/useButtonsPane";
import useRedirection from "../../../hooks/useRedirection";
import {useLocation} from "react-router-dom";

const SettingsForm = () => {
    const location = useLocation()
    const redirect = useRedirection()
    const settingsList = useButtonsPane(FIELDS.settings)

    useEffect(() => {
        document.querySelectorAll('.Settings-item').forEach(item => {
            const itemValue = item.querySelector('input')
            if (itemValue.type == 'checkbox') {
                itemValue.onchange = () => {
                    localStorage.setItem(LOCAL_STORAGE_KEYS.theme, itemValue.checked? THEME.light : THEME.dark)
                    itemValue.checked = !itemValue.checked
                    redirect(location.pathname, false)
                }
            }
        })
    }, [])

    return (
        <div id="Settings-form" className="d-flex flex-column ms-auto me-auto mt-5 mb-auto p-2 w-50">
            {
                settingsList
            }
        </div>
    )
}

export default SettingsForm
import React from "react";
import {FIELD_TYPES, LOCAL_STORAGE_KEYS, THEME} from "../../../globalConstants";

const SettingsItem = (props) => {
    const { name, type } = props.data

    let interactionItem

    switch (type) {
        case FIELD_TYPES.flag:
            const isDarkTheme = localStorage.getItem(LOCAL_STORAGE_KEYS.theme) === THEME.dark
            interactionItem = <input type="checkbox" className="d-flex mt-auto mb-auto" checked={ isDarkTheme }></input>
            break
    }

    return (
        <div className="Settings-item d-flex justify-content-between flex-row mt-auto mb-auto w-100">
            <span className="d-flex mt-auto mb-auto me-4">{ name }</span>
            {
                interactionItem
            }
        </div>
    )
}

export default SettingsItem
import React from "react";
import {FIELD_KEYS, FIELD_TYPES, LOCAL_STORAGE_KEYS, THEME} from "../../../globalConstants";

const SettingsItem = (props) => {
    const { key, name, type } = props.data

    let isItemChecked
    switch (key) {
        case FIELD_KEYS.theme:
            isItemChecked = localStorage.getItem(LOCAL_STORAGE_KEYS.theme) === THEME.dark
            break
    }

    let interactionItem
    switch (type) {
        case FIELD_TYPES.flag:
            interactionItem = <input type="checkbox" className="d-flex mt-auto mb-auto" checked={ isItemChecked }></input>
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
import React from "react";
import {FIELD_TYPES} from "../../../globalConstants";

export default function FullCardItem(props) {
    const { data, isLastItem } = props.data

    const direction = data.type === FIELD_TYPES.flag? 'flex-row' : 'flex-column'
    const margin = isLastItem? 'mb-0' : 'mb-4'
    const labelStyle = data.type === FIELD_TYPES.flag? 'me-2 mt-auto mb-auto' : 'mb-2'

    let inputType = null
    switch (data.type) {
        case FIELD_TYPES.text:
            inputType = <input type="text" className="d-flex ms-0" disabled={ true }></input>
            break
        case FIELD_TYPES.date:
            inputType = <input type="datetime-local" className="d-flex ms-0" disabled={ true }></input>
            break
        case FIELD_TYPES.flag:
            inputType = <input type="checkbox" className="d-flex me-auto" checked={ false } disabled={ true }></input>
            break
        case FIELD_TYPES.label:
            inputType = <label className="d-flex ms-0 mb-0 p-0"></label>
            break
    }

    return(
        <div className={ `Full-card-item d-flex ${ direction} ${ margin }` }>
            <span className={ `d-flex ${ labelStyle }` }>
                {
                    data.name
                }
            </span>
            {
                inputType
            }
        </div>
    )
}
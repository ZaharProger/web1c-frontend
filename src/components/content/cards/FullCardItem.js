import React from "react";
import {FIELD_TYPES} from "../../../globalConstants";
import useRedirection from "../../../hooks/useRedirection";

export default function FullCardItem(props) {
    const redirect = useRedirection()

    const { data, isLastItem } = props.data

    const direction = data.type === FIELD_TYPES.flag? 'flex-row' : 'flex-column'
    const margin = isLastItem? 'mb-0' : 'mb-4'
    const labelStyle = data.type === FIELD_TYPES.flag? 'me-2 mt-auto mb-auto' : 'mb-2'

    let inputType = null
    switch (data.type) {
        case FIELD_TYPES.text:
            inputType = data.route === null? <input type="text" className="d-flex ms-0"></input>
                :
                <div className="d-flex flex-row">
                    <input type="text" className="d-flex me-2 ms-0 flex-grow-1"></input>
                    <i className="d-flex fa-regular fa-ellipsis mt-auto mb-auto p-1"
                       onClick={ () => redirect(data.route) }/>
                </div>
            break
        case FIELD_TYPES.date:
            inputType = <input type="date" className="d-flex ms-0"></input>
            break
        case FIELD_TYPES.flag:
            inputType = <input type="checkbox" className="d-flex me-auto" checked={ false }></input>
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
import React from "react";

export default function CardItem(props) {

    return(
        <div className={ `Card-item d-flex ${ props.data.field_margins }` }>
            <span className="d-flex pe-2 ps-2 pb-1 pt-1">{ `${props.data.item_name}:\xa0\xa0` }</span>
        </div>
    )
}
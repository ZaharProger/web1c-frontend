import React from "react";

const SubMenuItem = (props) => {
    const { callback, caption } = props.item_data

    return(
        <div className="Submenu-item d-flex me-auto p-2">
            <span onClick={ () => callback() } >
                { caption }
            </span>
        </div>
    )
}

export default SubMenuItem
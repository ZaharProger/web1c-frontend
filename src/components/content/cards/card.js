import React from "react";
import '../../../styles/card.css';
import useRedirection from "../../../hooks/useRedirection";

export default function Card(props) {
    const redirect = useRedirection()

    return (
        <div className="Card d-flex p-3 m-3" onClick={ () => redirect(props.route) }>
            {
                props.children
            }
        </div>
    );
}
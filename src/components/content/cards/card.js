import React from "react";
import '../../../styles/card.css';

export default function Card(props) {
    return (
        <div className="Card d-flex p-3 m-3">
            {props.children}
            <i id="roll" class="fa-light fa-square-chevron-down "></i>
        </div>
    );
}
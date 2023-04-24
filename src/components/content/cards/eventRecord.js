import React from "react";

import '../../../styles/card.css';

export default function EventRecord(props) {
    return (
        <div>
            <div className="d-flex justify-content-end pb-2">
                <label>Дата создания:</label>
                <label>25.04.2023</label>
            </div>

            <div className="CardInfo">
                <div>
                    <label>Номер:</label>
                    <label>Number</label>
                </div>
                <div>
                    <label>Документ основание:</label>
                    <label>Document</label>
                </div>
            </div>

        </div>
    );
}
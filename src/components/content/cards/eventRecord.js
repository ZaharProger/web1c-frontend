import React from "react";

import '../../../styles/card.css';

export default function EventRecord(props) {
    return (
        <div className="CardInfo d-flex flex-column text-white">
            
            <div>
                <label>Номер:</label>
                <input name="number" type="number"></input>
            </div>
            <div>
                <label>Дата создания:</label>
                <input name="date" type="date"></input>
            </div>
            <div>
                <label>Документ основание:</label>
                <input name="document" type="text"></input>
            </div>

        </div>
    );
}
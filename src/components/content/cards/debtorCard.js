import React from "react";

import '../../../styles/card.css';

export default function DebtorCard(props) {
    return (
        <div className="CardInfo d-flex flex-column text-white">
            
            <div>
                <label>Наименование:</label>
                <input name="name" type="text"></input>
            </div>
            <div>
                <label>Дата создания:</label>
                <input name="date" type="date"></input>
            </div>
            <div>
                <label>Должник:</label>
                <input name="debtor" type="text"></input>
            </div>

        </div>
    );
}
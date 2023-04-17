import React from "react";

import '../../../styles/card.css';

export default function DebtorContract(props) {
    return (
        <div className="CardInfo d-flex flex-column text-white">
            
            <div>
                <label>Наименование:</label>
                <input name="name" type="text"></input>
            </div>
            <div>
                <label>Договор основание:</label>
                <input name="contract" type="text"></input>
            </div>
            <div>
                <label>Дата:</label>
                <input name="date" type="date"></input>
            </div>
            <div>
                <label>Ответственный:</label>
                <input name="responsible" type="text"></input>
            </div>

        </div>
    );
}
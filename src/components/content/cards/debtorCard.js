import React from "react";

import '../../../styles/card.css';

export default function DebtorCard(props) {
    return (
        <div>
            <div className="d-flex justify-content-end pb-2">
                <label>Дата создания:</label>
                <label>25.04.2023</label>
            </div>
            <div className="CardInfo">
                <div>
                    <label>Наименование:</label>
                    <label>Lorem ipsum</label>
                </div>
                <div>
                    <label>Должник:</label>
                    <label>Ivanov Ivan</label>
                </div>

            </div>
        </div>
    );
}
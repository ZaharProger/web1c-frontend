import React from "react";

import '../../../styles/card.css';

export default function DebtorContract(props) {
    return (
        <div>
            <div className="d-flex justify-content-end pb-2">
                <label>Дата:</label>
                <label>25.04.2023</label>
            </div>
            <div className="CardInfo">
                <div>
                    <label>Наименование:</label>
                    <label>Name</label>
                </div>
                <div>
                    <label>Договор основание:</label>
                    <label>Contract</label>
                </div>
                <div>
                    <label>Ответственный:</label>
                    <label>Responsible</label>
                </div>
            </div>
        </div>
    );
}
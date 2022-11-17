import { useEffect } from "react";

import "../styles/authentication.css";
import companyLogo from '../pics/enplus_2005.svg';
import useValidation from '../hooks/useValidation';
import { validationCases } from "../globalConstants";

export default function Authentication() {
    const { perform_validation: validate, update_inputs: updateInputs } = useValidation();
    useEffect(() => {
        const authForm = document.getElementById('Authentication');
        authForm.onsubmit = async (e) => {
            e.preventDefault();

            const formInputs = Array.from(authForm.getElementsByTagName('input'));
            const validationResults = [];
            validationResults.push(validate(formInputs, validationCases.empty_fields));

            const firstFailedCase = validationResults.find(validationResult => validationResult.error_message != '');
            updateInputs(formInputs, firstFailedCase !== undefined? firstFailedCase.error_inputs : []);

            if (firstFailedCase !== undefined){
                // Тут обращение к бекенду
            }
        }
    })

    return (
        <form id="Authentication" className="d-flex flex-column">
            <div className="logo">
                <img src={companyLogo}></img>
            </div>
            <div className="info d-flex flex-column pt-5 pe-2 ps-2">
                <input className="input-placeholder p-2" type="text" placeholder="Логин" autoComplete="off"></input>
                <input className="input-placeholder p-2" type="password" placeholder="Пароль" autoComplete="off"></input>
                <button type="submit">Войти</button>
            </div>
        </form>
    )
}
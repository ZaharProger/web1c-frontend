import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/authentication.css";
import companyLogo from '../pics/enplus_2005.svg';
import useValidation from '../hooks/useValidation';
import { validationCases, routes } from "../globalConstants";

export default function Authentication() {
    const navigate = useNavigate();
    const { validate, update } = useValidation();
    useEffect(() => {
        const authForm = document.getElementById('Authentication');
        authForm.onsubmit = async (e) => {
            e.preventDefault();

            const formInputs = Array.from(authForm.getElementsByTagName('input'));
            const validationResults = [];
            validationResults.push(validate(formInputs, validationCases.emptyFields));

            const firstFailedCase = validationResults.find(validationResult => validationResult.message != '');
            update(formInputs, firstFailedCase !== undefined? firstFailedCase.inputs : []);

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
                <button type="submit" onClick={() => {navigate(routes.main)}}>Войти</button>
            </div>
        </form>
    )
}
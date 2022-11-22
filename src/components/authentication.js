import { useEffect, useState } from "react";

import "../styles/authentication.css";
import companyLogo from '../pics/enplus_2005.svg';
import useValidation from '../hooks/useValidation';
import useRedirection from '../hooks/useRedirection';
import { validationCases, routes } from "../globalConstants";
import Modal from "./modal";

export default function Authentication() {
    const redirect = useRedirection();
    const { validate, update } = useValidation();
    const [modalActive, setModalActive] = useState(false);

    useEffect(() => {
        const authForm = document.getElementById('Authentication');
        authForm.onsubmit = async (e) => {
            e.preventDefault();

            const formInputs = Array.from(authForm.getElementsByTagName('input'));
            const validationResults = [];
            validationResults.push(validate(formInputs, validationCases.emptyFields));

            const firstFailedCase = validationResults.find(validationResult => validationResult.message != '');
            update(formInputs, firstFailedCase !== undefined ? firstFailedCase.inputs : []);

            if (firstFailedCase === undefined) {
                // Тут обращение к бекенду
                redirect(routes.main);
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
                <button type="submit" onClick={() => setModalActive(true)}>Войти</button>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                Возникла ошибка! Проверьте введенные данные!
            </Modal>
        </form>
    )
}
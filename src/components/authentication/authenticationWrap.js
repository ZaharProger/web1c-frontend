import { useState, useEffect } from 'react';

import Authentication from './authentication';
import Modal from '../modal';
import useRedirection from '../../hooks/useRedirection';
import useValidation from '../../hooks/useValidation';
import { validationCases, routes } from '../../globalConstants';

export default function AuthenticationWrap() {
    const redirect = useRedirection();
    const { validate, update } = useValidation();
    const [modalActive, setModalActive] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const authForm = document.getElementById('Authentication');
        const formInputs = Array.from(authForm.getElementsByTagName('input'));

        formInputs.forEach(input => {
            input.oninput = () => {
                update(formInputs, Array.from(document.getElementsByClassName('incorrect'))
                    .filter(errorInput => errorInput !== input));

                if (modalActive){
                    setTimeout(() => setModalActive(false), 300);
                }
            }
        });

        authForm.onsubmit = async (e) => {
            e.preventDefault();

            const validationResults = [];
            validationResults.push(validate(formInputs, validationCases.emptyFields));
            validationResults.push(validate(formInputs, validationCases.extraSymbols));

            const firstFailedCase = validationResults.find(validationResult => validationResult.message != '');
            update(formInputs, firstFailedCase !== undefined ? firstFailedCase.inputs : []);
   
            if (firstFailedCase === undefined) {
                // Тут обращение к бекенду
                redirect(routes.main);
            }
            else{
                setErrorMessage(firstFailedCase.message);
                setModalActive(true);
            }
        }
    }, [modalActive])

    return(
        <div id="AuthenticationWrap" className="d-flex flex-column">
            {
                modalActive? <Modal message={ errorMessage } /> : null
            }
            <Authentication />
        </div>
    )
}

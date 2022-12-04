import { useState, useEffect } from 'react';

import Authentication from './authentication';
import Modal from '../modal';
import useRedirection from '../../hooks/useRedirection';
import useValidation from '../../hooks/useValidation';
import useApi from '../../hooks/useApi';
import { VALIDATION_CASES, ROUTES, API, SERVER_ERROR_MESSAGE, AWAIT_BUTTON_TEXT } from '../../globalConstants';

export default function AuthenticationWrap() {
    const redirect = useRedirection();
    const performApiCall = useApi();
    const { validate, update } = useValidation();
    const [modalActive, setModalActive] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const authForm = document.getElementById('Authentication');
        const formInputs = Array.from(authForm.getElementsByTagName('input'));
        const formButton = authForm.querySelector('button');

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
            validationResults.push(validate(formInputs, VALIDATION_CASES.emptyFields));
            validationResults.push(validate(formInputs, VALIDATION_CASES.extraSymbols));
            const firstFailedCase = validationResults.find(validationResult => validationResult.message != '');
            
            let message;
            let isModalActive;
            let errorInputs;
            const prevCaption = formButton.innerText;
            formButton.innerText = AWAIT_BUTTON_TEXT;

            if (firstFailedCase === undefined) {
                const formData = new FormData(authForm);
                formData.append(API.params.request_type, 0);
                
                const { ok, data } = await performApiCall(API.endpoints.users, API.methods.post, formData);
                message = ok? data.message : SERVER_ERROR_MESSAGE;
                isModalActive = ok? !data.result : true;    
                errorInputs = ok? Array.from(document.getElementsByName(data.incorrectFieldType)) : [];              
            }
            else{             
                message = firstFailedCase.message;
                isModalActive = true;  
                errorInputs = firstFailedCase.inputs;             
            }

            formButton.innerText = prevCaption;
            update(formInputs, errorInputs);

            if (isModalActive){
                setErrorMessage(message);
                setModalActive(isModalActive);
            }
            else{
                redirect(ROUTES.main);
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

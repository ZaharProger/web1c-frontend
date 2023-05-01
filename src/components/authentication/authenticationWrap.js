import { useEffect } from 'react';

import Authentication from './authentication';
import useRedirection from '../../hooks/useRedirection';
import useValidation from '../../hooks/useValidation';
import useApi from '../../hooks/useApi';
import useRedux from '../../hooks/useRedux';
import { VALIDATION_CASES, ROUTES, API, SERVER_ERROR_MESSAGE, AWAIT_BUTTON_TEXT } from '../../globalConstants';
import { MODAL_STATE } from '../../state-manager/stateConstants';

export default function AuthenticationWrap() {
    const redirect = useRedirection();
    const performApiCall = useApi();
    const { validate, update } = useValidation();
    const updateModalInfo = useRedux(MODAL_STATE);

    useEffect(() => {
        const authForm = document.getElementById('Authentication');
        const formInputs = Array.from(authForm.getElementsByTagName('input'));
        const formButton = authForm.querySelector('button');

        formInputs.forEach(input => {
            input.oninput = () => {
                update(formInputs, Array.from(document.getElementsByClassName('incorrect'))
                    .filter(errorInput => errorInput !== input));

                setTimeout(() => updateModalInfo({
                    isActive: false,
                    message: ''
                }), 300);
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
                formData.append(API.params.requestType, 0);
                
                const { ok, responseBody } = await performApiCall('/api/Users', API.methods.post, formData);
                message = ok? responseBody.message : SERVER_ERROR_MESSAGE;
                isModalActive = ok? !responseBody.result : true;    
                errorInputs = ok? Array.from(document.getElementsByName(responseBody.incorrectFieldType)) : [];              
            }
            else{             
                message = firstFailedCase.message;
                isModalActive = true;  
                errorInputs = firstFailedCase.inputs;             
            }

            formButton.innerText = prevCaption;
            update(formInputs, errorInputs);

            if (isModalActive){
                updateModalInfo({
                    isActive: isModalActive,
                    message: message
                });
            }
            else{
                redirect(ROUTES.main);
            }
        }
    }, [])

    return(
        <div id="AuthenticationWrap" className="d-flex flex-column">         
            <Authentication />
        </div>
    )
}

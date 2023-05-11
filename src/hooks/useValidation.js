import {VALIDATION_CASES} from "../globalConstants";

export default function useValidation(){
    //Обновление инпутов. Если инпут оказался в списке непрошедших валидацию, добавляем ему класс incorrect (см. validation.css),
    //иначе - удаляем
    function updateInputs(oldInputs, errorInputs){
        oldInputs.forEach(input => {
            input.classList.remove('incorrect');
            errorInputs.includes(input)? input.classList.add('incorrect') : input.classList.remove('incorrect');
        });
    }

    //Проверка кейса. В случае непрохождения проверки возвращается сообщение об ошибке и список инпутов, не прошедших проверку
    function checkCase(inputs, validationCase){
        let inputCounter = 0
        let firstInput = null

        const validationResult = inputs.filter(input => {
            let result

            if (inputCounter == inputs.length - 1 && validationCase === VALIDATION_CASES.passwordMismatch) {
                result = validationCase.predicate(input, firstInput)
            }
            else {
                result = validationCase === VALIDATION_CASES.passwordMismatch?
                    false: validationCase.predicate(input)
                firstInput = input
            }

            ++inputCounter

            return result
        });

        let errorMessage = "";
        let errorInputs = [];
        if (validationResult.length != 0){
            errorMessage = validationCase.messageIfError;
            errorInputs.push(...validationResult);
        }

        return {
            message: errorMessage,
            inputs: errorInputs
        }
    }

    //Осуществление валидации по заданному кейсу. По ключу кейса подбираются предикат и сообщение в случае непрохождения проверки
    function performValidation(formInputs, validationCase){
        return checkCase(formInputs, validationCase);
    }


    //Хук возвращает две функции: валидацию по кейсу и обновление инпутов
    return {
        validate: performValidation,
        update: updateInputs
    }
}
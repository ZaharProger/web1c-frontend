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
    function checkCase(inputs, predicate, messageIfError){
        const validationResult = inputs.filter(input => predicate(input));

        let errorMessage = "";
        let errorInputs = [];
        if (validationResult.length != 0){
            errorMessage = messageIfError;
            errorInputs.push(...validationResult);
        }

        return {
            message: errorMessage,
            inputs: errorInputs
        }
    }

    //Осуществление валидации по заданному кейсу. По ключу кейса подбираются предикат и сообщение в случае непрохождения проверки
    function performValidation(formInputs, validationCase){
        return checkCase(formInputs, validationCase.predicate, validationCase.messageIfError);
    }


    //Хук возвращает две функции: валидацию по кейсу и обновление инпутов
    return {
        validate: performValidation,
        update: updateInputs
    }
}
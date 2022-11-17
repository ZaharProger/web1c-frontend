export const routes = {
    main: '/',
    auth: '/auth',
    not_found: '/*'
}

export const validationCases = {
    empty_fields: {
        predicate: (input) => input.value == '' || input.value.split(/[\s]+/).every(splittedItem => splittedItem == ''),
        message_if_error: 'Заполните все поля!'
    },
    password_mismatch: {
        predicate: (input, firstInput) => input.value != firstInput.value,
        message_if_error: 'Пароли не совпадают!'
    }
}
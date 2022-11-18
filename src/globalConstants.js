export const routes = {
    main: '/',
    auth: '/auth',
    notFound: '/*'
}

export const validationCases = {
    emptyFields: {
        predicate: (input) => input.value == '' || 
        (input.value.split(/[\s]+/).every(splittedItem => splittedItem == '') && input.type != 'password'),
        messageIfError: 'Заполните все поля!'
    },
    passwordMismatch: {
        predicate: (input, firstInput) => input.value != firstInput.value,
        messageIfError: 'Пароли не совпадают!'
    }
}
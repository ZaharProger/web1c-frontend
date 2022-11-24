export const routes = {
    main: '/',
    auth: '/auth',
    notFound: '/*'
}

export const validationCases = {
    emptyFields: {
        predicate: (input) => input.value == '',
        messageIfError: 'Заполните все поля!'
    },
    passwordMismatch: {
        predicate: (input, firstInput) => input.value != firstInput.value && input.type == 'password',
        messageIfError: 'Пароли не совпадают!'
    },
    extraSymbols: {
        predicate: (input) => input.value.match((/[\s!~\\/#$@^&?*()+={}[\],\.<>:;""''``]+/)) != null && input.type != 'password',
        messageIfError: 'Логин пользователя должен содержать только русские и латинские буквы, цифры и символы -, _'
    }
}
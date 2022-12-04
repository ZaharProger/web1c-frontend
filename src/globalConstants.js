export const ROUTES = {
    main: '/',
    auth: '/auth',
    notFound: '/*'
}

export const VALIDATION_CASES = {
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

export const API = {
    methods: {
        post: 'POST',
        get: 'GET',
        put: 'PUT',
        delete: 'DELETE'
    },
    endpoints: {
        users: '/api/Users'
    },
    params: {
        request_type: 'requestType'
    }
}

export const SERVER_ERROR_MESSAGE = 'Ошибка сервера';

export const AWAIT_BUTTON_TEXT = 'Подождите...';
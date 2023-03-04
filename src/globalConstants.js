export const ROUTES = {
    main: '/',
    auth: '/auth',
    notFound: '/*',
    classes: '/classes',
    documents: '/docs',
    settings: '/settings',
    societies: '/societies',
    work_types: '/work-types',
    debtors: '/debtors',
    events: '/events',
    debtor_contracts: '/debtor-contracts'
}

export const LOCAL_STORAGE_KEYS = {
    isLogged: 'isLogged'
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
        predicate: (input) => input.value.match((/[\s!~\\/#$@^&?*()+={}[\],.<>:;"'`]+/)) != null &&
            input.type != 'password',
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
        requestType: 'requestType',
        type: 'type'
    }
}

export const SERVER_ERROR_MESSAGE = 'Ошибка сервера, повторите попытку позже!';

export const AWAIT_BUTTON_TEXT = 'Подождите...';

export const BUTTON_KEYS = {
    classes_button: 'classes',
    societies_button: 'societies',
    work_types_button: 'work_types',
    debtors_button: 'debtors',
    docs_button: 'docs',
    events_button: 'events',
    debtor_contracts_button: 'debtor_contracts',
    settings_button: 'settings',
    sign_out_button: 'sign_out'
}

export const PANE_TEMPLATES = {
    navbar: [
        {
            key: BUTTON_KEYS.classes_button,
            caption: 'Справочники',
            route: ROUTES.classes,
            sub_items: [
                {
                    key: BUTTON_KEYS.societies_button,
                    caption: 'Общества',
                    route: ROUTES.classes + ROUTES.societies
                },
                {
                    key: BUTTON_KEYS.work_types_button,
                    caption: 'Виды работ',
                    route: ROUTES.classes + ROUTES.work_types
                },
                {
                    key: BUTTON_KEYS.debtors_button,
                    caption: 'Карточки должников',
                    route: ROUTES.classes + ROUTES.debtors
                }
            ]
        },
        {
            key: BUTTON_KEYS.docs_button,
            caption: 'Документы',
            route: ROUTES.documents,
            sub_items: [
                {
                    key: BUTTON_KEYS.events_button,
                    caption: 'Записи событий',
                    route: ROUTES.documents + ROUTES.events
                },
                {
                    key: BUTTON_KEYS.debtor_contracts_button,
                    caption: 'Договоры должников',
                    route: ROUTES.documents + ROUTES.debtor_contracts
                }
            ]
        },
        {
            key: BUTTON_KEYS.settings_button,
            caption: 'Настройки',
            route: ROUTES.settings,
            sub_items: []
        },
        {
            key: BUTTON_KEYS.sign_out_button,
            caption: 'Выход',
            route: ROUTES.auth,
            sub_items: []
        }
    ]
}
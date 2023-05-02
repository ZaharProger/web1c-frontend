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
    debtor_contracts: '/debtor-contracts',
    sides: '/sides',
    sanctions: '/sanctions',
    currencies: '/currencies',
    bdds_notes: '/bdds-notes',
    budget_notes: '/budget-notes',
    settlements: '/settlements',
    external_is: '/external-is',
    markets: '/markets',
    counteragents_categories: '/counteragents-categories',
    users: '/users',
    event_states: '/event-states',
    history: '/History'
}

export const THEME = {
    light: 'light',
    dark: 'dark'
}

export const LOCAL_STORAGE_KEYS = {
    prevRoute: 'prev_route',
    theme: 'theme'
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
    params: {
        requestType: 'requestType',
        type: 'type',
        key: 'Key'
    }
}

export const SERVER_ERROR_MESSAGE = 'Ошибка сервера, повторите попытку позже!';

export const AWAIT_BUTTON_TEXT = 'Подождите...';

export const BUTTONS = {
    navbar: [
        {
            icon: 'book',
            caption: 'Справочники',
            route: ROUTES.classes,
            sub_items: [
                {
                    caption: 'Карточки должников',
                    route: ROUTES.classes + ROUTES.debtors
                }
            ]
        },
        {
            icon: 'file',
            caption: 'Документы',
            route: ROUTES.documents,
            sub_items: [
                {
                    caption: 'Записи событий',
                    route: ROUTES.documents + ROUTES.events
                },
                {
                    caption: 'Договоры должников',
                    route: ROUTES.documents + ROUTES.debtor_contracts
                }
            ]
        },
        {
            icon: 'gear',
            caption: 'Настройки',
            route: ROUTES.settings,
            sub_items: []
        },
        {
            icon: 'right-from-bracket',
            caption: 'Выход',
            route: ROUTES.auth,
            sub_items: []
        }
    ],
    full_card: [
        {
            caption: 'Назад',
            route: null,
            sub_items: []
        }
    ]
}

export const FIELD_TYPES = {
    flag: 0,
    text: 1,
    radio: 2,
    date: 3,
    label: 4,
    ref: 5
}

export const FIELDS = {
    settings: [
        {
            name: 'Использовать темную тему',
            type: FIELD_TYPES.flag,
            route: null
        }
    ],
    long: {
        debtor_card: [
            {
                name: 'Код',
                type: FIELD_TYPES.label,
                route: null
            },
            {
                name: 'Наименование',
                type: FIELD_TYPES.text,
                route: null
            },
            {
                name: 'Дата создания',
                type: FIELD_TYPES.date,
                route: null
            },
            {
                name: 'Должник',
                type: FIELD_TYPES.ref,
                route: ROUTES.debtors
            },
            {
                name: 'ИНН',
                type: FIELD_TYPES.text,
                route: null
            },
            {
                name: 'КПП',
                type: FIELD_TYPES.text,
                route: null
            },
            {
                name: 'СМП',
                type: FIELD_TYPES.flag,
                route: null
            },
            {
                name: 'Санкции',
                type: FIELD_TYPES.ref,
                route: ROUTES.sanctions
            },
            {
                name: 'Банкротство',
                type: FIELD_TYPES.flag,
                route: null
            },
            {
                name: 'В реестре кредиторов',
                type: FIELD_TYPES.flag,
                route: null
            }
        ],
        debtor_contract_card: [
            {
                name: 'Код',
                type: FIELD_TYPES.label,
                route: null
            },
            {
                name: 'Наименование',
                type: FIELD_TYPES.text,
                route: null
            },
            {
                name: 'Основание',
                type: FIELD_TYPES.ref,
                route: ROUTES.debtor_contracts
            },
            {
                name: 'Статус',
                type: FIELD_TYPES.text,
                route: null
            },
            {
                name: 'Дата',
                type: FIELD_TYPES.date,
                route: null
            },
            {
                name: 'Номер',
                type: FIELD_TYPES.text,
                route: null
            },
            {
                name: 'Валюта',
                type: FIELD_TYPES.ref,
                route: ROUTES.currencies
            },
            {
                name: 'Статья БДДС',
                type: FIELD_TYPES.ref,
                route: ROUTES.bdds_notes
            },
            {
                name: 'Статья бюджета',
                type: FIELD_TYPES.ref,
                route: ROUTES.budget_notes
            },
            {
                name: 'Вид взаиморасчётов',
                type: FIELD_TYPES.ref,
                route: ROUTES.settlements
            },
            {
                name: 'Комментарий',
                type: FIELD_TYPES.text,
                route: null
            },
            {
                name: 'Общество',
                type: FIELD_TYPES.ref,
                route: ROUTES.societies
            },
            {
                name: 'Бизнес',
                type: FIELD_TYPES.ref,
                route: ROUTES.sides
            },
            {
                name: 'Вид рынка',
                type: FIELD_TYPES.ref,
                route: ROUTES.markets
            },
            {
                name: 'Категория контрагента',
                type: FIELD_TYPES.ref,
                route: ROUTES.counteragents_categories
            },
            {
                name: 'Публичный',
                type: FIELD_TYPES.flag,
                route: null
            },
            {
                name: 'Типовой',
                type: FIELD_TYPES.flag,
                route: null
            },
            {
                name: 'Отключаемый',
                type: FIELD_TYPES.flag,
                route: null
            },
            {
                name: 'Ответственный',
                type: FIELD_TYPES.ref,
                route: ROUTES.users
            },
        ],
        event_card: [
            {
                name: 'Номер',
                type: FIELD_TYPES.label,
                route: null
            },
            {
                name: 'Дата создания',
                type: FIELD_TYPES.date,
                route: null
            },
            {
                name: 'Плановая дата исполнения',
                type: FIELD_TYPES.date,
                route: null
            },
            {
                name: 'Дата отправки на исполнение',
                type: FIELD_TYPES.date,
                route: null
            },
            {
                name: 'Фактическая дата исполнения',
                type: FIELD_TYPES.date,
                route: null
            },
            {
                name: 'Документ основание',
                type: FIELD_TYPES.ref,
                route: ROUTES.events
            },
            {
                name: 'Вид работы',
                type: FIELD_TYPES.ref,
                route: ROUTES.work_types
            },
            {
                name: 'Карточка',
                type: FIELD_TYPES.ref,
                route: ROUTES.debtors
            },
            {
                name: 'Общество',
                type: FIELD_TYPES.ref,
                route: ROUTES.societies
            },
            {
                name: 'Бизнес',
                type: FIELD_TYPES.ref,
                route: ROUTES.sides
            },
            {
                name: 'О проведенной работе',
                type: FIELD_TYPES.text,
                route: null
            },
            {
                name: 'Комментарий',
                type: FIELD_TYPES.text,
                route: null
            },
            {
                name: 'Ответственный',
                type: FIELD_TYPES.ref,
                route: ROUTES.users
            },
            {
                name: 'Статус',
                type: FIELD_TYPES.ref,
                route: ROUTES.event_states
            }
        ]
    },
    short: {
        debtor_card_short: [
            'Дата создания',
            'Код',
            'Наименование',
            'Должник'
        ],
        debtor_contract_card_short: [
            'Дата',
            'Код',
            'Наименование',
            'Основание'
        ],
        event_card_short: [
            'Дата создания',
            'Номер',
            'Вид работы',
            'Карточка'
        ]
    }
}
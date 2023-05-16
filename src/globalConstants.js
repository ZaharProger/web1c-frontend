export const ROUTES = {
    main: '/',
    auth: '/auth',
    register: '/register',
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
    passwordLength: {
        predicate: (input) => input.value.length < 8 && input.type == 'password',
        messageIfError: 'Длина пароля должна быть не менее 8 символов!'
    },
    extraSymbols: {
        predicate: (input) => input.value.match((/[\s!~\\/#$@^&?*()+={}[\],.<>:;"'`]+/)) != null &&
            input.type != 'password',
        messageIfError: 'Логин пользователя должен содержать только русские и латинские буквы, цифры и символы -, _'
    }
}

export const FULL_CARD_MODES = {
    main: 'main',
    related_events: 'events',
    related_agreements: 'agreements'
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
        },
        {
            caption: 'Основное',
            route: null,
            sub_items: []
        },
        {
            caption: 'Связанные события',
            route: null,
            sub_items: []
        },
        {
            caption: 'Связанные договоры',
            route: null,
            sub_items: []
        }
    ]
}

export const FIELD_TYPES = {
    flag: 0,
    text: 1,
    date: 2,
    label: 3
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
                type: FIELD_TYPES.text,
                route: ROUTES.debtors
            },
            {
                name: 'Дебиторская задолженность на отчетную дату',
                type: FIELD_TYPES.label,
                route: null
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
                type: FIELD_TYPES.text,
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
                type: FIELD_TYPES.text,
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
                type: FIELD_TYPES.text,
                route: ROUTES.currencies
            },
            {
                name: 'Статья БДДС',
                type: FIELD_TYPES.text,
                route: ROUTES.bdds_notes
            },
            {
                name: 'Статья бюджета',
                type: FIELD_TYPES.text,
                route: ROUTES.budget_notes
            },
            {
                name: 'Вид взаиморасчётов',
                type: FIELD_TYPES.text,
                route: ROUTES.settlements
            },
            {
                name: 'Комментарий',
                type: FIELD_TYPES.text,
                route: null
            },
            {
                name: 'Общество',
                type: FIELD_TYPES.text,
                route: ROUTES.societies
            },
            {
                name: 'Бизнес',
                type: FIELD_TYPES.text,
                route: ROUTES.sides
            },
            {
                name: 'Вид рынка',
                type: FIELD_TYPES.text,
                route: ROUTES.markets
            },
            {
                name: 'Категория контрагента',
                type: FIELD_TYPES.text,
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
                type: FIELD_TYPES.text,
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
                name: 'Наименование',
                type: FIELD_TYPES.text,
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
                type: FIELD_TYPES.text,
                route: ROUTES.events
            },
            {
                name: 'Вид работы',
                type: FIELD_TYPES.text,
                route: ROUTES.work_types
            },
            {
                name: 'Карточка',
                type: FIELD_TYPES.text,
                route: ROUTES.debtors
            },
            {
                name: 'Общество',
                type: FIELD_TYPES.text,
                route: ROUTES.societies
            },
            {
                name: 'Бизнес',
                type: FIELD_TYPES.text,
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
                type: FIELD_TYPES.text,
                route: ROUTES.users
            },
            {
                name: 'Статус',
                type: FIELD_TYPES.text,
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
            'Наименование'
        ]
    }
}
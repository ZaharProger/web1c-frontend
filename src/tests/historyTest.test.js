import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import MainPage from "../components/content/mainPage/MainPage";
import Card from "../components/content/cards/card";
import {FULL_CARD_MODES, ROUTES} from "../globalConstants";
import {Router} from "react-router-dom";
import {Provider} from "react-redux";
import store from "../state-manager/store";

const historyOkResponse = {
    data: [
        {
            $type: 'debtorCard',
            debtor_card_id: 18,
            debtor_card_name: 'card name 8',
            creation_date: 45041,
            debtor: 'Some company 10',
            debtorPaymentArrears: null,
            inn: null,
            kpp: null,
            isSmp: null,
            sanctions: null,
            isBankrupt: null,
            isInCreditorsList: null,
            route: '/classes/debtors/18'
        },
        {
            $type: 'debtorCard',
            debtor_card_id: 17,
            debtor_card_name: 'card name 8',
            creation_date: 45041,
            debtor: 'Some company 10',
            debtorPaymentArrears: null,
            inn: null,
            kpp: null,
            isSmp: null,
            sanctions: null,
            isBankrupt: null,
            isInCreditorsList: null,
            route: '/classes/debtors/17'
        },
    ],
    result: true,
    message: ''
}

const historyEmptyResponse = {
    data: [],
    result: true,
    message: ''
}

const performRender = async (isOk=true) => {
    const response = isOk? historyOkResponse : historyEmptyResponse

    render(
        <Provider store={store}>
            <Router location={ROUTES.main} navigator={null}>
                <MainPage callback={ () => {
                    const cards = []
                    for (let i = 0; response.data !== null && i < response.data.length; ++i) {
                        cards.push(
                            <Card key={`Card_${i + 1}`} card_props={{
                                route: response.data[i].route,
                                mode: FULL_CARD_MODES.main
                            }}/>
                        )
                    }

                    return cards
                } } />
            </Router>
        </Provider>
    )

    await screen.findAllByRole('heading')
    if (isOk) {
        await screen.findAllByRole('listbox')
        await screen.findAllByRole('listitem')
    }
}

//Проверяем факт того, что заголовок истории отрисовался
test('history header has been rendered', async () => {
    await performRender()
    expect(screen.getByRole('heading')).toBeInTheDocument()
})

//Проверяем факт того, что контейнер списка просмотренных записей отрисовался
test('history list has been rendered', async () => {
    await performRender()
    expect(screen.getByRole('listbox')).toBeInTheDocument()
})

//Проверяем факт того, что отрисовалось 2 карточки, согласно ответу сервера
test('history list contains 2 items', async () => {
    await performRender()
    expect(screen.getAllByRole('listitem').length).toBeGreaterThanOrEqual(historyOkResponse.data.length)
})

//Проверяем факт того, что сообщение с иконкой о пустой истории отрисовались
test('cards data is empty', async () => {
    await performRender(false)
    expect(screen.getAllByRole('heading').length).toBeGreaterThanOrEqual(2)
})

import React, {useCallback} from "react";

import '../../../styles/mainPage.css';

export default function MainPage(props) {
    const getGreeting = useCallback(() => {
        const currentHours = new Date().getHours()
        let greeting

        if (currentHours >= 5 && currentHours <= 11) {
            greeting = 'Доброе утро!'
        }
        else if (currentHours >= 12 && currentHours <= 16) {
            greeting = 'Добрый день!'
        }
        else if (currentHours >= 17 && currentHours <= 23) {
            greeting = 'Добрый вечер!'
        }
        else {
            greeting = 'Доброй ночи!'
        }

        return greeting
    }, [])

    const cards = props.callback()

    return(
        <div id="Main-page" className="d-flex flex-column m-auto w-100">
            <span className="d-flex me-auto ms-auto text-center mb-5">{ getGreeting() }</span>
            {
                cards.length != 0?
                    <>
                        <p className="d-flex me-auto mt-2 ms-4 mb-1 text-center">
                            Просмотрено ранее
                        </p>
                        <div className="history-list d-flex flex-row pe-2 ps-2">
                            {
                                cards
                            }
                        </div>
                    </>
                    :
                    <>
                        <i className="fa-regular fa-location-question d-flex me-auto ms-auto mt-5"></i>
                        <p className="d-flex me-auto ms-auto mt-2 text-center">
                            Ваша история просмотров пуста
                            <br />
                            Вы можете приступить к работе, воспользовавшись главным меню в верхней части сайта
                        </p>
                    </>
            }
        </div>
    )
}
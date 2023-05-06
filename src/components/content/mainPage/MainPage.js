import React from "react";

import '../../../styles/mainPage.css';

export default function MainPage(props) {
    const cards = props.callback()

    return(
        <div id="Main-page" className="d-flex flex-column m-auto w-100">
            {
                cards.length != 0?
                    <>
                        <p className="d-flex me-auto mt-2 ms-4 mb-1 text-center">
                            Просмотрено ранее
                        </p>
                        <div className="history-list d-flex flex-row pe-2 ps-2 flex-wrap">
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
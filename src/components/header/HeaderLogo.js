import React, {useCallback, useContext, useEffect, useState} from "react";
import useRedirection from "../../hooks/useRedirection";
import {API, ROUTES, SERVER_ERROR_MESSAGE} from "../../globalConstants";
import {appContext} from "../../contexts";
import {useLocation} from "react-router-dom";
import useApi from "../../hooks/useApi";
import useRedux from "../../hooks/useRedux";
import {CARDS, MODAL_STATE} from "../../state-manager/stateConstants";

const HeaderLogo = () => {
    const location = useLocation()
    const redirect = useRedirection()

    const { theme, is_mobile_screen } = useContext(appContext)
    const [isSearchFocused, changeSearchFocused] = useState(true)

    const performApiCall = useApi()
    const updateModalInfo = useRedux(MODAL_STATE)
    const updateCards = useRedux(CARDS)

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

    useEffect(() => {
        const searchField = document.getElementById('Header-logo').querySelector('input')
        if (searchField !== null) {
            searchField.onfocus = () => changeSearchFocused(true)
            searchField.onblur = () => changeSearchFocused(false)

            searchField.onkeydown = async (e) => {
                if (isSearchFocused && e.code == 'Enter') {
                    let params = `${API.params.type}=${searchField.value == ''? 1 : 4}`
                    if (searchField.value != '') {
                        params += `&${API.params.key}=${searchField.value.trim()}`
                    }

                    const { ok, responseBody } = await performApiCall(
                        `/api/${location.pathname}?${params}`,
                        API.methods.get
                    );

                    if (ok) {
                        updateCards(responseBody.data)
                    }
                    else {
                        updateModalInfo({
                            isActive: true,
                            message: SERVER_ERROR_MESSAGE
                        })
                    }
                }
            }
        }
    }, [is_mobile_screen, location.pathname])

    return (
        <div id="Header-logo" className="d-flex flex-row me-3 ms-2 flex-grow-1">
            <img className="logo-nav d-flex" src={`/pics/enplus_2005_${theme? 'dark' : 'light'}.svg`}
                 onClick={ () => redirect(ROUTES.main) } alt="company logo"></img>
            {
                [ROUTES.main, ROUTES.settings].includes(location.pathname)?
                    <span className="d-flex me-auto ms-5 mt-auto mb-auto text-center">{ getGreeting() }</span>
                    :
                    <input type="text" placeholder=" &#xf002; Поиск"
                           className="search fontAwesome d-flex mt-auto mb-auto ms-5 w-50"></input>
            }
        </div>
    )
}

export default HeaderLogo
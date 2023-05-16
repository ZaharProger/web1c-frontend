import React, {useCallback, useContext, useEffect, useState} from "react";
import useRedirection from "../../hooks/useRedirection";
import {API, ROUTES, SERVER_ERROR_MESSAGE} from "../../globalConstants";
import {appContext} from "../../contexts";
import {useLocation, useParams} from "react-router-dom";
import useApi from "../../hooks/useApi";
import useRedux from "../../hooks/useRedux";
import {CARDS, MODAL_STATE, REFRESH_FLAG} from "../../state-manager/stateConstants";
import SearchHelpMessage from "./SearchHelpMessage";
import {useSelector} from "react-redux";

const HeaderLogo = () => {
    const location = useLocation()
    const id = useParams().id
    const redirect = useRedirection()

    const { theme, is_mobile_screen } = useContext(appContext)
    const [isMessageActive, changeMessageActive] = useState(false)

    const performApiCall = useApi()
    const updateModalInfo = useRedux(MODAL_STATE)
    const updateCards = useRedux(CARDS)
    const updateRefreshFlag = useRedux(REFRESH_FLAG)

    const profileData = useSelector(state => state.profileData)
    const refreshFlag = useSelector(state => state.refreshFlag)

    const getGreeting = useCallback(() => {
        const currentHours = new Date().getHours()
        let greeting

        if (currentHours >= 5 && currentHours <= 11) {
            greeting = 'Доброе утро'
        }
        else if (currentHours >= 12 && currentHours <= 16) {
            greeting = 'Добрый день'
        }
        else if (currentHours >= 17 && currentHours <= 23) {
            greeting = 'Добрый вечер'
        }
        else {
            greeting = 'Доброй ночи'
        }

        return `${greeting}, ${profileData.en_user_login}!`
    }, [])

    useEffect(() => {
        const searchField = document.getElementById('Header-logo').querySelector('input')

        if (searchField !== null) {
            searchField.onfocus = () => {
                searchField.classList.add('focused')
                changeMessageActive(true)
            }
            searchField.onblur = () => {
                searchField.classList.remove('focused')
                changeMessageActive(false)
            }

            searchField.onkeydown = async (e) => {
                if (searchField.classList.contains('focused') && e.key == 'Enter') {
                    changeMessageActive(false)

                    let params = `${API.params.type}=${searchField.value == ''? 1 : 3}`
                    if (searchField.value != '') {
                        params += `&${API.params.key}=${searchField.value.trim()}`
                    }

                    const { ok, responseBody } = await performApiCall(
                        `/api/${location.pathname}?${params}`,
                        API.methods.get
                    )

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
                 onClick={ () => {
                     updateRefreshFlag(!refreshFlag)
                     redirect(ROUTES.main, false)
                 } } alt="company logo"></img>
            {
                [ROUTES.main, ROUTES.settings].includes(location.pathname) || id !== undefined?
                    <span className="d-flex me-auto ms-5 mt-auto mb-auto text-center">{ getGreeting() }</span>
                    :
                    <input type="text" placeholder=" &#xf002; Поиск"
                           className="search fontAwesome d-flex mt-auto mb-auto ms-5 w-50"></input>
            }
            {
                isMessageActive? <SearchHelpMessage /> : null
            }
        </div>
    )
}

export default HeaderLogo
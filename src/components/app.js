import {Route, Routes, useLocation} from 'react-router-dom';
import { useSelector } from 'react-redux';
import {useEffect, useState} from "react";

import ContentWrap from './content/contentWrap';
import Error404 from './error/error404';
import Modal from './modal/modal';
import AuthenticationWrap from './authentication/authenticationWrap';
import ProtectedRoutes from './protectedRoutes';
import {LOCAL_STORAGE_KEYS, ROUTES, THEME} from '../globalConstants';
import {appContext} from "../contexts";
import '../styles/placeholder.css';
import '../styles/validation.css';
import '../styles/body.css';
import '../styles/media.css';
import useRedux from "../hooks/useRedux";
import {MOBILE_MENU_STATE} from "../state-manager/stateConstants";

export default function App() {
    const location = useLocation()
    const [isMobileScreen, changeMobileScreen] = useState(window.innerWidth <= 1000)
    const changeMenuState = useRedux(MOBILE_MENU_STATE)

    const {isActive, message} = useSelector(state => state.modalState)
    const currentChatBotState = useSelector(state => state.chatBotState)
    const mobileMenuState = useSelector(state => state.mobileMenuState)

    if (localStorage.getItem(LOCAL_STORAGE_KEYS.theme) === null) {
        localStorage.setItem(LOCAL_STORAGE_KEYS.theme, THEME.dark)
    }

    const contextData = {
        theme: localStorage.getItem(LOCAL_STORAGE_KEYS.theme) === THEME.dark,
        is_mobile_screen: isMobileScreen,
        chatbot_state: currentChatBotState,
        mobile_menu_state: mobileMenuState
    }

    window.onresize = () => {
        changeMobileScreen(window.innerWidth <= 1000)
        if (window.innerWidth > 1000) {
            changeMenuState(false)
        }
    }

    useEffect(() => {
        document.querySelectorAll('body, #Header').forEach(container => {
            if (container.id != 'Header') {
                container.style.background = contextData.theme? '#212529' : '#FFFFFF'
            }
            else {
                container.style.background =
                    `linear-gradient(${contextData.theme? '#212529' : '#FFFFFF'} 60%, transparent)`
            }
        })

        document.querySelectorAll('span, input, p').forEach(text => {
            if (text.classList.contains('auth')) {
                text.style.color = '#212529'
            }
            else {
                text.style.color = contextData.theme? '#FFFFFF' : '#212529'
            }
        })

        document.querySelectorAll('i').forEach(icon => {
            if (!icon.parentElement.classList.contains('Navbar-list-item')) {
                if (icon.classList.contains('fa-bars') || icon.classList.contains('fa-magnifying-glass')) {
                    icon.classList.replace(mobileMenuState ? 'fa-bars' : 'fa-magnifying-glass',
                        mobileMenuState ? 'fa-magnifying-glass' : 'fa-bars')
                }

                if (icon.classList.contains('fa-ellipsis')) {
                    icon.style.color = '#FFFFFF'
                }
                else {
                    icon.style.color = '#FD9330'
                }

                icon.style.transition = '0.3s ease-out'
                icon.onmouseover = () => {
                    icon.style.transform = 'scale(1.3)'
                }
                icon.onmouseleave = () => {
                    icon.style.transform = 'scale(1)'
                }
            }
            else {
                icon.style.color = contextData.theme? '#FFFFFF' : '#212529'
            }
        })

        const auth = document.querySelector('#Authentication')
        if (auth !== null) {
            auth.querySelectorAll('input').forEach(field => {
                field.style.borderColor = contextData.theme? '#FFFFFF' : '#212529'
                const prevBorderColor = field.style.borderColor

                field.onfocus = () => {
                    field.style.borderColor = '#FD9330'
                    field.style.boxShadow = '0 3px 1px #FD9330'
                }
                field.onblur = () => {
                    field.style.borderColor = prevBorderColor
                    field.style.boxShadow = 'none'
                }
            })
        }
    }, [location, isMobileScreen, currentChatBotState, mobileMenuState])

    return (
        <appContext.Provider value={ contextData }>
            <div id="App" className="d-flex w-100 h-100">
                {
                    isActive? <Modal message={ message } /> : null
                }
                <Routes>
                    <Route element={<ProtectedRoutes />}>
                        <Route path={ROUTES.main} element={<ContentWrap />} />
                        <Route path={ROUTES.auth} element={<AuthenticationWrap />} />
                        <Route path={ROUTES.settings} element={<ContentWrap />} />
                        <Route path={`${ROUTES.debtors}/:id`} element={<ContentWrap />} />
                        <Route path={`${ROUTES.debtor_contracts}/:id`} element={<ContentWrap />} />
                        <Route path={`${ROUTES.events}/:id`} element={<ContentWrap />} />
                    </Route>
                    <Route path={ROUTES.notFound} element={<Error404 />} />
                </Routes>
            </div>
        </appContext.Provider>
    )
}
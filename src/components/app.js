import {Route, Routes, useLocation} from 'react-router-dom';
import { useSelector } from 'react-redux';
import {useEffect} from "react";

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

export default function App() {
    const location = useLocation()
    const { isActive, message } = useSelector(state => state.modalState);

    if (localStorage.getItem(LOCAL_STORAGE_KEYS.theme) === null) {
        localStorage.setItem(LOCAL_STORAGE_KEYS.theme, THEME.dark)
    }

    const contextData = {
        theme: localStorage.getItem(LOCAL_STORAGE_KEYS.theme) === THEME.dark
    }

    useEffect(() => {
        document.querySelectorAll('body, #Header').forEach(container => {
            if (container.id != 'Header') {
                container.style.background = contextData.theme? '#212529' : '#FFFFFF'
            }
            else {
                container.style.background = `linear-gradient(${contextData.theme? 
                    '#212529' : '#FFFFFF'} 60%, transparent)`
            }
        })

        document.querySelectorAll('span, input, p, .Card').forEach(text => {
            if (text.classList.contains('auth')) {
                text.style.color = '#212529'
            }
            else {
                text.style.color = contextData.theme? '#FFFFFF' : '#212529'
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
    }, [location])

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
                    </Route>
                    <Route path={ROUTES.notFound} element={<Error404 />} />
                </Routes>
            </div>
        </appContext.Provider>
    )
}
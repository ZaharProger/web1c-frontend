import "../../styles/authentication.css";
import useRedirection from "../../hooks/useRedirection";
import {ROUTES} from "../../globalConstants";
import {useLocation} from "react-router-dom";

export default function Authentication() {
    const location = useLocation()
    const redirect = useRedirection()

    const isRegister = location.pathname === ROUTES.register

    return (
        <form id="Authentication" className="d-flex flex-column">
            <div className="logo d-flex me-auto ms-auto">
                <img src="/pics/enplus_2005_dark.svg" alt="company logo"></img>
            </div>
            <div className="info d-flex flex-column pt-5 pe-2 ps-2">
                <input name="login" className="input-placeholder p-2 auth" type="text"
                placeholder="Доменное имя" autoComplete="off"></input>
                <input name="password" className="input-placeholder p-2 auth" type="password"
                placeholder="Пароль" autoComplete="off"></input>
                {
                    isRegister?
                        <input name="password" className="input-placeholder p-2 auth" type="password"
                               placeholder="Повторите пароль" autoComplete="off"></input>
                        :
                        null
                }
                <button type="submit">{ isRegister? 'Зарегистрироваться' : 'Войти' }</button>
                <button id="reg-button" type="button"
                        onClick={ () => redirect(isRegister? ROUTES.auth : ROUTES.register) }>
                    { isRegister? 'Войти в систему' : 'Зарегистрироваться' }
                </button>
            </div>
        </form>
    )
}
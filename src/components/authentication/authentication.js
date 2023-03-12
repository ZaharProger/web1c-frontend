import "../../styles/authentication.css";

export default function Authentication() {
    return (
        <form id="Authentication" className="d-flex flex-column">
            <div className="logo d-flex me-auto ms-auto">
                <img src="/pics/enplus_2005_dark.svg" alt="company logo"></img>
            </div>
            <div className="info d-flex flex-column pt-5 pe-2 ps-2">
                <input name="login" className="input-placeholder p-2 auth" type="text"
                placeholder="Логин" autoComplete="off"></input>
                <input name="password" className="input-placeholder p-2 auth" type="password"
                placeholder="Пароль" autoComplete="off"></input>
                <button type="submit">Войти</button>
            </div>
        </form>
    )
}
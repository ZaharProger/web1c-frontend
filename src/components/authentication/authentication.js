import "../../styles/authentication.css";
import companyLogo from '../../pics/enplus_2005.svg';

export default function Authentication() {
    return (
        <form id="Authentication" className="d-flex flex-column">
            <div className="logo d-flex me-auto ms-auto">
                <img src={companyLogo}></img>
            </div>
            <div className="info d-flex flex-column pt-5 pe-2 ps-2">
                <input className="input-placeholder p-2" type="text" placeholder="Логин" autoComplete="off"></input>
                <input className="input-placeholder p-2" type="password" placeholder="Пароль" autoComplete="off"></input>
                <button type="submit">Войти</button>
            </div>
        </form>
    )
}
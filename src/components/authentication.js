import "../styles/authentication.css";
import companyLogo from '../pics/enplus_2005.svg';
export default function Authentication() {
    return (
        <form>
            <div className="col">
                <div className="row logo">
                    <img src={companyLogo}></img>
                </div>
                <div className="row info">
                    <div className="col d-flex flex-column justify-content-evenly">
                        <input className="input-placeholder" type="text" placeholder="Логин" autoComplete="off"></input>
                        <input className="input-placeholder" type="password" placeholder="Пароль" autoComplete="off"></input>
                        <button type="submit">Войти</button>
                    </div>
                </div>
            </div>
        </form>
    )
}
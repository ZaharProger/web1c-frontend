import "../styles/authentication.css";
import companyLogo from '../pics/enplus_2005.svg';
export function Authentication(props) {
    return (
        <form>
            <div className="col">
                <div className="row logo">
                    <img src={companyLogo}></img>
                </div>
                <div className="row info">
                    <div className="col d-flex flex-column justify-content-evenly">
                        <input type="text" placeholder="Логин"></input>
                        <input type="password" placeholder="Пароль"></input>
                        <button type="submit">Войти</button>
                    </div>
                </div>
            </div>
        </form>
    )
}
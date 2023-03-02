import React from "react";
import "../styles/Header.css"
import companyLogo from '../pics/enplus_2005.svg';

const Header = () => {
    return (
        <nav id="Header">
            <img className="logo d-flex" src={companyLogo}></img>
            <input type="text" placeholder=" &#xf002; Поиск" className="search fontAwesome"></input>
            <ul className="wrapper">
                <li className="item"><a href="#">Справочники</a>
                    <ul>
			            <li><a href="#">Общества</a></li>
			            <li><a href="#">Виды работ</a></li>
			            <li><a href="#">Карточки должников</a></li>
			        </ul>
                </li>
                <li className="item"><a href="#">Документы</a>
                    <ul>
			            <li><a href="#">Записи событий</a></li>
			            <li><a href="#">Договоры должников</a></li>
			        </ul>
                </li>
                <li className="item"><a href="#">Настройки</a>
                    <ul>
			            <li><a href="#">Тема</a></li>
			        </ul>
                </li>
            </ul>
        </nav>
    );
}
export default Header;
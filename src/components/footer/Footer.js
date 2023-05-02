import React, {useContext} from "react";
import {appContext} from "../../contexts";

import '../../styles/footer.css';

export default function Footer() {
    const isDarkTheme = useContext(appContext).theme

    return(
        <div id="Footer" className="d-flex mt-auto me-auto ms-auto flex-column p-1">
            <img className="logo-nav d-flex mb-3 mt-5" src={`/pics/enplus_2005_${isDarkTheme? 'dark' : 'light'}.svg`}
                 alt="company logo"></img>
            <span className="d-flex align-items-center text-center mb-3">WEB-интерфейс для 1С систем <br /> 2023 </span>
        </div>
    )
}
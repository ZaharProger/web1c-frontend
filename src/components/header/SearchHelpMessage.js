import React from "react";

export default function SearchHelpMessage() {
    return(
        <div id="Search-help-message" className="d-flex p-2">
            <span className="d-flex text-center m-auto">
                Для поиска записей введите сочетание слов или цифр и нажмите клавишу Enter.
                <br />
                Если Вы хотите снова посмотреть все записи, оставьте строку поиска пустой и нажмите клавишу Enter.
            </span>
        </div>
    )
}
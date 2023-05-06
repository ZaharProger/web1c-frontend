import React from "react";

export default function EmptyListMessage() {
    return (
        <div id="Empty-list-message" className="d-flex flex-column me-auto ms-auto mb-auto mt-5">
            <i className="fa-regular fa-face-sad-tear d-flex me-auto ms-auto mb-2"></i>
            <span className="d-flex text-center me-auto ms-auto">По вашему запросу ничего не найдено!</span>
        </div>
    )
}
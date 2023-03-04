import React from "react";
import "../../styles/modal.css";

const Modal = (props) => {
    return (
        <div id="Modal" className="modal-active">
            <div className="modal__content">
                {
                    props.message
                }
            </div>
        </div>
    )
}

export default Modal;
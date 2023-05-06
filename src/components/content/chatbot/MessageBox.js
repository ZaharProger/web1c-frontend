import React from "react";

export default function MessageBox(props) {
    const { message_text, message_date, is_user } = props.message_props
    const messageMargins = `me-${is_user? '1' : 'auto'} ms-${is_user? 'auto' : '1'}`

    return (
        <div className={ `Message-box d-flex flex-column mt-2 mb-2 ${messageMargins}${is_user? '' : ' bot-answer'}` }>
            <span className="-d-flex text-end ms-auto pe-2 ps-2 pb-2 pt-1">
                {
                    message_date
                }
            </span>
            <span className="-d-flex text-start m-0 pe-2 ps-2 pb-1 pt-1">
                {
                    message_text
                }
            </span>
        </div>
    )
}
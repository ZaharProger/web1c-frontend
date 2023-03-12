import React from "react";

export default function Error404() {
    return (
        <div id="Error404" className="d-flex flex-column mx-auto mt-5 w-25">
            <div className="font-weight-bold text-white text-center">
                <p className="h1">
                    Error 404
                </p>
                <p className="h5">
                    Page is not found
                </p>
            </div>
            <img src="/pics/boom.png" alt="page not found"></img>
        </div>
    )
}
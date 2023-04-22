import React from "react";

import Header from '../header/Header';
import Content from "./content";

const ContentWrap = () => {
    return (
        <div id="Content-wrap" className="d-flex flex-column w-100">
            <Content />
            <Header />
        </div>
    );
}
export default ContentWrap;
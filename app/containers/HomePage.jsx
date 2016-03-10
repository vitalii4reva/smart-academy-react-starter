import React from "react";
import ImageEl from "elements/ImageEl";
import Sidebar from  "components/Sidebar.jsx"
import Gallery from "components/Gallery.jsx"

export default class HomePage extends React.Component {
    static getProps() {
        return {};
    }

    render() {
        return (<div>
            <Gallery n="4" m="5" />
            <Sidebar />
        </div>);
    }
}

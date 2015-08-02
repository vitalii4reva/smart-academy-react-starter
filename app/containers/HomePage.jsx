import React from "react";
import ImageEl from "elements/ImageEl";

export default class HomePage extends React.Component {
    static getProps() {
        return {};
    }

    render() {
        let images = [];
        for (let i = 1; i <= 10; i++){
         images.push(<ImageEl name={i}/>);
        }
        return (<div>
            {images}
        </div>);
    }
}

import React from "react";

export default class ImageEl extends React.Component {
    render() {
        var { name } = this.props;
        var url = 'http://lorempixel.com/200/200/sports/Dummy-Text' + name +'';
        return <img src={url} />;
    }
}
//ReactLogo.propTypes = {
//    type: React.PropTypes.oneOf(["svg", "png", "jpg"])
//};

import React from "react";
import { Images } from "actions";

export default class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            n: "5",
            m: "4"
        };
    }

    update() {
        event.preventDefault();
        console.log('update');
        console.log(this.state);
        Images.update(this.state);
    }

    render() {
        var { n, m } = this.state;
        return <form onSubmit={() => this.update()}>
            <input type="number" value={n} className="nm" onChange={(event) => {
					this.setState({
						n: event.target.value
					});
				}}></input>
            <input type="number" value={m} className="nm" onChange={(event) => {
					this.setState({
						m: event.target.value
					});
				}}></input>
            <button type="submit">Apply</button>
        </form>
    }
}
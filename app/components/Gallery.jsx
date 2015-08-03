import React from "react";
import ImageEl from "elements/ImageEl";

export default class Gallery extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            n: props.n,
            m: props.m
        };
    }

    renderCell(n, m) {
        return <td><ImageEl name={"" + n + m}/></td>;
    }

    renderRow(n, m) {
        let tds = [];
        for (var i = 0; i < m; i++) {
            tds.push(this.renderCell(n, i));
        }
        return tds;
    }

    renderTableContent(n, m) {
        let trs = [];
        for (var i = 0; i < n; i++) {
            trs.push(<tr>{this.renderRow(i, m)}</tr>);
        }
        return trs;
    }

    render() {

        var {n , m} = this.state;
        var tableContent = this.renderTableContent(n, m);

        return (<table>
            <tbody>
            {tableContent}
            </tbody>
        </table>)
    }
}
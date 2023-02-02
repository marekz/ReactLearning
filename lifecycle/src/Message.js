import React, { Component } from "react";
import {ActionButton} from "./ActionButton";

export class Message extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showSpan: false
        }
    }

    handleClick = (event) => {
        this.setState({ showSpan: !this.state.showSpan });
        this.props.callback(event);
    }

    getMessageElement() {
        let div = <div id="messageDiv" className="h5 text-center p-2">
            {this.props.message}
        </div>
        return this.state.showSpan ? <span>{div} </span> : div;
    }

    componentDidMount() {
        console.log("Komponent Message, metoda componentDidMount.");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Komponent message, metoda componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("Komponent Message, metoda componentWillUnmount");
    }

    render() {
        console.log(`Komponent Message, metoda render.`);
        return (
            <div>
                <ActionButton theme="primary" {...this.props}
                    callback={this.handleClick}
                />
                { this.getMessageElement() }
            </div>
        )
    }
}
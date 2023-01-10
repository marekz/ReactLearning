import React, { Component } from "react";
import PropTypes from "prop-types";

export class SimpleButton extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            hasButtonBeenClicked: false
        }
    }
    render () {
        return (
            <button onClick={ this.handleClick }
                    className={ this.props.className }
                    disabled={ this.props.disabled === "true"
                        || this.props.disabled === true }>
                { this.props.text } { this.state.counter }
                { this.state.hasButtonBeenClicked &&
                    <div>Kliknięcie przycisku</div>
                }
            </button>
        )
    }

    handleClick = () => {
        for (let i = 0; i < 5; i++) {
            this.setState((state, props) => {
                return { counter: this.state.counter + 1 } });
        }
        this.setState({ hasButtonBeenClicked: true });
        this.props.callback();
    }
}
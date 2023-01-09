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
            <button onClick={ this.props.callback }
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
}
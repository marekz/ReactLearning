import React, { Component } from "react";
import PropTypes from "prop-types";

export class SimpleButton extends Component {
    render () {
        return (
            <button onClick={ this.props.collback }
                    className={ this.props.className }
                    disabled={ this.props.disabled === "true"
                        || this.props.disabled === true }>
                { this.props.text }
            </button>
        )
    }
}
import React, { Component } from "react";
import PropTypes from "prop-types";

export class SimpleButton extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hasButtonBeenClicked: false
        }
    }
    render () {
        return (
            <button onClick={ this.handleClick }
                    className={ this.props.className }
                    disabled={ this.props.disabled === "true"
                        || this.props.disabled === true }>
                { this.props.text } { this.props.counter }
                { this.state.hasButtonBeenClicked &&
                    <div>Kliknięcie przycisku</div>
                }
            </button>
        )
    }

    handleClick = () => {
        this.props.incrementCallback(5);
        this.setState({ hasButtonBeenClicked: true });
        this.props.callback();
    }
}

SimpleButton.defaultProps = {
    disabled: false
}

SimpleButton.propTypes = {
    text: PropTypes.string,
    teme: PropTypes.string,
    callback: PropTypes.func,
    disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
}
import React from "react";
import PropTypes from "prop-types";

export function SimpleButton(props) {
    return (
        <button onClick={props.collback} className={props.className}>
            {props.text}
        </button>
    )
}

SimpleButton.defaultProps = {
    disabled: false
}

SimpleButton.propTypes = {
    text: PropTypes.string,
    theme: PropTypes.string,
    callback: PropTypes.func,
    disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
}
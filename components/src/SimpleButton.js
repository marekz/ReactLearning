import React from "react";
import PropTypes from "prop-types";

export function SimpleButton(props) {
    return (
        <button onClick={ props.collback } className={ props.className }
        disabled={ props.disabled === "true" || props.disabled === true }>
            { props.text }
        </button>
    )
}
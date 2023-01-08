import React from "react";

export function SimpleButton(props) {
    return (
        <button onClick={props.collback} className={props.className}>
            {props.text}
        </button>
    )
}
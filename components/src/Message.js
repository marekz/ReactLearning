import React from "react";

export function Message(props) {
    let classes = props.name === "Jacku" ? "bg-warning p-2"
        : "bg-success text-white text-center p-2";

    return <h4 className={ classes }>
        {props.graeting}, {props.name} !
    </h4>
}
import React from "react";

export function Message(props) {
    let classes;

    switch (props.name) {
        case "Jacku":
            classes = "bg-warning p-2";
            break;
        case "Marku":
            classes = "bg-secondary text-white text-center p-2";
            break;
        default:
            classes = "bg-success text-white text-center p-2"
    }

    return <h4 className={ classes }>
        {props.graeting}, {props.name} !
    </h4>
}
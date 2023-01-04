import React from "react";

export function Message(props) {
    if (props.name === "Jacku") {
        return <h4 className="bg-warning p-2">
            {props.graeting}, {props.name} !
        </h4>
    }
    return <h4 className="bg-success text-white text-center p-2">
        {props.graeting}, {props.name} !
    </h4>
}
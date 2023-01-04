import React from "react";

export function Message(props) {
    return <h4 className="bg-success text-white text-center p-2">
        {props.graeting}, {props.name} !
    </h4>
}
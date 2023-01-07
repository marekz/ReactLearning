import React from "react";

export function Summary(props) {
    return <React.Fragment>
        <td>{props.index + 1}</td>
        <td>{props.name} </td>
        <td>{props.name.length} </td>
        <td>
            <button className="btn btn-primary btn-sm"
                onClick={props.reverseCallback}>
                Zmień kolejność
            </button>
        </td>
    </React.Fragment>
}
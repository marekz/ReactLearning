import React from "react";
import {CallbackButton} from "./CallbackButton";

export function Summary(props) {
    return <React.Fragment>
        <td>{props.index + 1}</td>
        <td>{props.name} </td>
        <td>{props.name.length} </td>
        <td>
            <CallbackButton theme="primary"
                text="Zmień kolejność"
                callback={props.reverseCallback} />
            <CallbackButton theme="info"
                text="Na początek"
                callback={() => props.promoteCallback(props.name)} />
        </td>
    </React.Fragment>
}
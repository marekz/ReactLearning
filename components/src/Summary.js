import React, { Component } from "react";
import {SimpleButton} from "./SimpleButton";
import { HooksButton} from "./HooksButton";

export class Summary extends Component {

    render() {
        const props = this.props;

        return <React.Fragment>
            <td>{props.index + 1}</td>
            <td>{props.name} </td>
            <td>{props.name.length} </td>
            <td>
                <SimpleButton
                    className="btn btn-warning btn-sm m-1"
                    callback={ props.reverseCallback }
                    text={ `Odwróć kolejność (${props.name})` }
                    { ...this.props }
                />
                <HooksButton
                    className="btn btn-info btn-sm m-1"
                    callback={ () => props.promoteCallback(props.name) }
                    text={ `Na początek (${props.name})` }
                    { ...this.props }
                />
            </td>
        </React.Fragment>
    }
}
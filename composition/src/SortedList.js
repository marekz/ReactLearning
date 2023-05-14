import React, { Component } from "react";
import { GeneralList} from "./GeneralList";
import { ActtionButton} from "./ActionButton";

export class SortedList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sort: false
        }
    }

    getList() {
        return this.state.sort
            ? [...this.props.list].sort() : this.props.list;
    }

    toggleSort = () => {
        this.setState({ sort: !this.state.sort });
    }

    render() {
        return (
            <div>
                <GeneralList list={this.getList()} theme="info" />
                <div className="text-center m-2">
                    <ActtionButton theme="primary" text="Sortuj"
                                   callback={this.toggleSort} />
                </div>
            </div>
        )
    }
}
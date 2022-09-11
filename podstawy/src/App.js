import React, {Component} from "react";

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 5
        }
    }

    isEven(val) {
        return val % 2 === 0 ? "parzysta" : "nieparzysta";
    }

    getClassName(val) {
        return val % 2 === 0
            ? "bg-primary text-white text-ceter p-2 m-1"
            : "bg-secondary text-white text-ceter p-2 m-1"
    }

    render = () =>
        <p className={ this.getClassName(this.state.count) }>
            Liczba przedmiotów jest { this.isEven(this.state.count) }
        </p>

}

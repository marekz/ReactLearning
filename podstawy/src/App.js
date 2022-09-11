import React, {Component} from "react";

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 4
        }
    }

    isEven(val) {
        return val % 2 === 0 ? "parzysta" : "nieparzysta";
    }

    render = () =>
        <p className="bg-primary text-white text-center p-2 m-1">
            Liczba przedniotów jest { this.isEven(this.state.count) }
        </p>

}

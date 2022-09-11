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

    handleClick = () => this.setState({ count: this.state.count + 1 });

    render = () =>
        <h4 className={this.getClassName(this.state.count)}>
            <button className="btn btn-info m-2" onClick={this.handleClick}>
                Kliknij mnie
            </button><br />
            Liczba przedmiotów jest { this.isEven(this.state.count) }<br />
            Liczba przedmiotów wynosi { this.state.count }

        </h4>

}

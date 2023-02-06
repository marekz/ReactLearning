import React, { Component } from "react";
// import { Message } from "./Message";
// import { List } from "./List";
// import {ExternalCounter} from "./ExternalCounter";
// import { HooksMessage } from "./HooksMessage";
import { DirectionDisplay } from "./DirectionDisplay";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    }
  }

  changeCounter = (val) => {
    this.setState({counter: this.state.counter + val })
  }

  render() {
    console.log("Komponent App, metoda render.");
    return <div className="container text-center">
      <DirectionDisplay value={this.state.counter} />
      <button className="btn btn-primary m-1"
              onClick={() => this.changeCounter(-1)}>Pomniejsz</button>
      <button className="btn btn-primary m-1"
              onClick={() => this.changeCounter(1)}>Powiększ</button>

    </div>
  }
}
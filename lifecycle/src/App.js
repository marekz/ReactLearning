import React, { Component } from "react";
import { Message } from "./Message";
// import { List } from "./List";
// import {ExternalCounter} from "./ExternalCounter";
// import { HooksMessage } from "./HooksMessage";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counterLeft: 0,
      counterRight: 0
    }
  }

  incrementCounter = (counter) => {
    if (counter === "left") {
      this.setState({ counterLeft: this.state.counterLeft + 1 });
    } else {
      this.setState({ counterRight: this.state.counterRight + 1 });
    }
  }

  handleChange = () => {
    this.setState({ showMessage: !this.state.showMessage })
  }

  render() {
    console.log("Komponent App, metoda render.");
    return <div className="container text-center">
      <div className="row p-2">
        <div className="col-6">
          <Message message={ `Lewy: ${this.state.counterLeft}` }
                   callback={ () => this.incrementCounter("left") }
                   text="Inkremetuj lewy licznik" />
        </div>
        <div className="col-6">
          <Message message={ `Lewy: ${this.state.counterRight}` }
                   callback={ () => this.incrementCounter("right") }
                   text="Inkremetuj prawy licznik" />
        </div>
      </div>
    </div>
  }
}
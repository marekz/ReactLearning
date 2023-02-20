import { Component } from "react";
import { ActtionButton } from "./ActionButton";
import { Message } from "./Message";

export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1});
  }

  render() {
    return <div className="m-2 text-center">
      <Message theme="primary"
        message={`Licznik: ${this.state.counter}`} />
      <ActtionButton theme="secondary"
        text="Inkrementuj" callback={this.incrementCounter} />
    </div>
  }
}

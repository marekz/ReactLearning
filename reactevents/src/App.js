import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Gotowy!"
    }
  }

  handleEvent = (event) => {
      if (event.type === "mousedown") {
          this.setState({ message: "Przycisk myszy wciśnięty" });
      } else {
          this.setState({ message: "Przycisk myszy zwolniony" });
      }
  }

  render() {
    return (
        <div className="m-2">
          <div className="h4 bg-primary text-white text-center p-2">
            { this.state.message }
          </div>
          <div className="text-center">
            <button className="btn btn-primary"
                    onMouseDown={this.handleEvent}
                    onMouseUp={this.handleEvent}
            >Kliknij mnie!</button>
          </div>
        </div>
    )
  }
}
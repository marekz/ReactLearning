import React, { Component } from "react";
import { ThemeButton } from "./ThemeButton";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        message: "Gotowy!",
        counter: 0,
        theme: "secondary"
    }
  }

  selectTheme = (newTheme) => {
      this.setState({
          theme: newTheme,
          message: `Theme: ${newTheme}`
      });
  }

  render() {
    return (
        <div className="m-2">
            <div className={`h4 bg-${this.state.theme}
                text-white text-center p-2`}>
                {this.state.message}
            </div>
            <div className="text-center">
                <ThemeButton theme="primary" callback={this.selectTheme} />
                <ThemeButton theme="danger" callback={this.selectTheme} />
            </div>
        </div>
    )
  }
}
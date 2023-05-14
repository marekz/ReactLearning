import React, {Component} from "react";

export class ThemeSelector extends Component {

    constructor(props) {
        super(props);
        this.state = {
            theme: "primary",
            reverseChildren: false
        }
        this.theme = ["primary", "secondary", "success", "warning", "dark"];
    }

    setTheme = (event) => {
        this.setState({ theme: event.target.value });
    }

    toggleReverse = () => {
        this.setState({ reverseChildern: !this.state.reverseChildern });
    }

    render () {

        let modChildren = React.Children.map(this.props.children,
            (c => React.cloneElement(c, { theme: this.state.theme })));

        if (this.state.reverseChildern) {
            modChildren.reverse();
        }

        return (
            <div className="bg-dark p-2">
                <button className="btn btn-primary" onClick={this.toggleReverse}>
                    Odwróć kolejność
                </button>
                <div className="form-group text-left">
                    <label className="text-white">Temat: </label>
                    <select className="form-control" value={this.state.theme}
                            onChange={this.setTheme}>
                        {this.theme.map(theme =>
                            <option key={theme} value={theme}>{theme}</option>)}
                    </select>
                </div>
                <div className="bg-info p-2">
                    { modChildren }
                </div>
            </div>
        )
    }
}
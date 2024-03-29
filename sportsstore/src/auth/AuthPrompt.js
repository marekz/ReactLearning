import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { authWrapper} from "./AuthWrapper";
import { ValidateForm} from "../forms/ValidateForm";

export const AuthPrompt = withRouter(authWrapper(class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: null
        }
        this.defaultAttrs = { required: true };
        this.formModel = [
            { label: "Username", labelText: "Nazwa użytkownika",
                attrs: { defaultValue: "admin" } },
            { label: "Password", labelText: "Hasło",
                attrs: { defaultValue: "password" } },
        ];
    }

    authenticate = (credentials) => {
        this.props.authenticate(credentials)
            .catch(err => this.setState({ errorMessage: err.message }))
            .then(this.props.history.push("/admin"));
    }

    render = () =>
        <div className="container-fluid">
            <div className="row">
                <div className="col bg-dark text-white">
                    <div className="navbar-brand">Sklep SPORTSSTORE</div>
                </div>
            </div>
            <div className="row">
                <div className="col m-2">
                    {this.state.errorMessage != null &&
                        <h4 className="bg-danger text-center text-white m-1 p-2">
                            { this.state.errorMessage }
                        </h4>
                    }
                    <ValidateForm formModel={this.formModel}
                        defaultAttrs={this.defaultAttrs}
                        submitCallback={this.authenticate}
                        submitText="Zaloguj"
                        cancelCallback={() => this.props.history.push("/")}
                        cancelText="Anuluj"
                    />
                </div>
            </div>
        </div>
}))
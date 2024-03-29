import React, { Component } from "react";
import { ValidateForm } from "../forms/ValidateForm";
import { Mutation } from "react-apollo";
import { storeProducts, updateProduct } from "./clientMutations";

export class ProductCreator extends Component {

    constructor(props) {
        super(props);
        this.defaultAttrs = { type: "text", required: true };
        this.formModel = [
            { label: "Name", labelText: "Nazwa" },
            { label: "Description", labelText: "Opis"},
            { label: "Category", labelText: "Kategoria"},
            { label: "Price", labelText: "Cena", attrs: { type: "number" } },
        ];
        this.mutation = storeProducts;
        if (this.props.mode === "edit") {
            this.mutation = updateProduct;
            this.formModel = [{ label: "Id", attr: { disabled: true } },
                ...this.formModel]
                .map(item => ({
                    ...item, attrs: {
                        ...item.attrs,
                        defaultValue: this.props.product[item.label.toLowerCase()]
                    }
                }));
        }
    }

    navigate = () => this.props.history.push("/admin/products");

    render = () => {
        return <div className="container-fluid">
            <div className="row">
                <div className="col bg-dark text-white">
                    <div className="navbar-brand">Sklep SPORTSTORE</div>
                </div>
            </div>

            <div className="row">
                <div className="col m-2">
                    <Mutation mutation={this.mutation}>
                        {(saveMutation, { client }) => {
                            return <ValidateForm formModel={this.formModel}
                                                 defaulAttrs={this.defaultAttrs}
                                                 submitCallback={data => {
                                                     saveMutation({
                                                         variables: {
                                                             product:
                                                                 { ...data, price: Number(data.price) }
                                                         }
                                                     });
                                                     if (this.props.mode !== "edit") {
                                                         client.resetStore();
                                                     }
                                                     this.navigate();
                                                 }}
                                                 cancelCallback = {this.navigate}
                                                 submitText = "Zapisz"
                                                 cancelText = "Anuluj" />
                        }}
                    </Mutation>
                </div>
            </div>
        </div>
    }
}
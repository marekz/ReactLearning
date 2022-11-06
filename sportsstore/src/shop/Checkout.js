import React, { Component } from "react";
import { ValidateForm } from "../forms/ValidateForm";

export class Checkout extends Component {
    constructor(props) {
        super(props);
        this.defaultAttr = { type: "text", required: true };
        this.formModel = [
            { label: "Imię i nazwisko "},
            { label: "Adres e-mail", attrs: { type: "email" } },
            { label: "Adres" },
            { label: "Miejscowość" },
            { label: "Kod pocztowy", name: "zip" },
            { label: "Kraj" }
        ];
    }
    handleSubmit = (formData) => {
        const order = {
            ...formData, products: this.props.cart.map(item =>
                ({ quantity: item.quantity, product_id: item.product.id })
            )
        }

        this.props.placeOrder(order);
        this.props.clearCart();
        this.props.history.push("/shop/thanks");
    }
    handleCancel = () => {
        this.props.history.push("/shop/cart");
    }
    render() {
        return <div className="container-fluid">
            <div className="row">
                <div className="col bg-dark text-white">
                    <div className="navbar-brand">Sklep SPORTSSTORE</div>
                </div>
            </div>
            <div className="row">
                <div className="col m-2">
                    <ValidateForm formModel={this.formModel}
                                  defaultAttr={this.defaultAttr}
                                  submitCallback={this.handleSubmit}
                                  cancelCallback={this.handleCancel}
                                  submitText="Złóż zamówienie"
                                  cancelText="Wróć do koszyka" />
                </div>
            </div>
        </div>
    }
}
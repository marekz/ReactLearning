import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as ShopActions from "../data/ActionCreators";
import { DataTypes } from "../data/Types";
import { Shop } from "./Shop";
import * as CartActions from "../data/CartActionCreators";
import { CartDetails} from "./CartDetails";
import { DataGetter } from "../data/DataGetter";
import { Checkout } from "./Checkout";
import { Thanks } from "./Thanks";

const mapStateToProps = (dataStore) => ({
    ...dataStore
})

const mapDispatchToProps = {
    ...ShopActions, ...CartActions
}

export const ShopConnector = connect(ds => ds, mapDispatchToProps) (
    class extends Component {
        selectComponent = (routeProps) => {
            const wrap = (Component, Content) =>
                <Component {...this.props} {...routeProps}>
                    {Component && wrap(Content)}
                </Component>
            switch (routeProps.match.params.section) {
                case "products":
                    return wrap(DataGetter, Shop);
                case "cart":
                    return wrap(CartDetails);
                case "checkout":
                    return wrap(Checkout);
                case "thanks":
                    return wrap(Thanks);
                default:
                    return <Redirect to="/shop/products/wszystkie/1" />;
            }
        }

        render() {
            return <Switch>
                <Redirect from="/shop/products/:category"
                    to="/shop/products/:category/1" exact={true} />
                <Route path={"/shop/:section?/:category?/:page?"}
                    render={routeProps => this.selectComponent(routeProps)} />
            </Switch>
        }

        componentDidMount = () => this.props.loadData(DataTypes.CATEGORIES);
    }
)
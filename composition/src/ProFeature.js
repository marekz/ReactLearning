import React from "react";

export function ProFeature(FeatureComponent) {

    return function (props) {
        if (props.pro) {
            let { pro, ...childProps } = props;
            return <FeatureComponent {...childProps} />
        } else {
            return (
                <h5 className="bg-warning text-white text-center">
                    To jest możliwość tylko dla speców.
                </h5>
            )
        }
    }
}
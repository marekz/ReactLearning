import React from "react";

function createInnerElement(names) {
    let arrayElement = [];
    for (let i = 0; i < names.length; i++ ) {
        arrayElement.push(
            <div>
                {`"${names[i]}" składs się z ${names[i].length} znaków`}
            </div>
        )
    }

    return arrayElement;
}

export function Summary(props) {
    return <h4 className="bg-info text-white text-center p-2">
        { createInnerElement(props.names) }
    </h4>
}
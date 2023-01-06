import React from "react";

function createInnerElement(names) {
    return names.map(name =>
        <div>
            {`"${name}" składs się z ${name.length} znaków`}
        </div>
    );
}

export function Summary(props) {
    return <h4 className="bg-info text-white text-center p-2">
        { createInnerElement(props.names) }
    </h4>
}
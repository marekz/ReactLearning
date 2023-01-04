import React from "react";
import { Message } from "./Message";

export default function App() {
    return (
        <div>
            <h1 className="bg-primary text-white text-center p-2">
                Witaj Adminie!
            </h1>
            <Message />
            <Message />
            <Message />
            <Message />
        </div>
    )
}

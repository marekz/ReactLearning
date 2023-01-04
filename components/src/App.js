import React from "react";
import { Message } from "./Message";
import { Summary } from "./Summary";

export default function App() {
    return (
        <div>
            <h1 className="bg-primary text-white text-center p-2">
                Witaj Adminie!
            </h1>
            <Message graeting="Witaj" name="Jacku" />
            <Message graeting="Siema" name={"Alu " + "Zuch"} />
            <Message graeting="Cześć" name="Marku" />
            <Summary />
        </div>
    )
}

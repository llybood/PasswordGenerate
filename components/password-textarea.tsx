import React from "react";
import {Textarea} from "@nextui-org/react";

export default function App(props: any) {
    return (
        <Textarea
            isReadOnly
            variant="bordered"
            labelPlacement="outside"
            placeholder={props.password}
            defaultValue={props.password}
            className="max-w-xl"
        />
    );
}

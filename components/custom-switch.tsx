import React from "react";
import {Switch, cn} from "@nextui-org/react";

export default function App(props: any) {
    return (
        <Switch
            classNames={{
                base: cn(
                    "inline-flex flex-row-reverse w-64 max-w-md bg-content1 hover:bg-content2 items-center",
                    "justify-between cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent shadow-xl",
                    // "data-[selected=true]:border-primary",
                ),
                wrapper: "p-0 h-4 overflow-visible",
                thumb: cn("w-6 h-6 border-2",
                    "group-data-[hover=true]:border-primary",
                    //selected
                    "group-data-[selected=true]:ml-6",
                    // pressed
                    "group-data-[pressed=true]:w-7",
                    "group-data-[selected]:group-data-[pressed]:ml-4",
                ),
            }}
            isSelected={props.isSelected}
            onValueChange={props.onValueChange}
        >
            <div className="flex flex-col gap-1">
                <p className="text-medium">{props.name}</p>
                <p className="text-tiny text-default-400">
                    {props.description}
                </p>
            </div>
        </Switch>
    );
}

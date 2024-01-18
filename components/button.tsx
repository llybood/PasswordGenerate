import React from "react";
import {Button} from "@nextui-org/react";

export default function App() {
    return (
        <div className="flex flex-wrap gap-48 items-center">
            <Button color="success">
                Generate
            </Button>
            <Button color="primary">
                Copy
            </Button>
        </div>
    );
}

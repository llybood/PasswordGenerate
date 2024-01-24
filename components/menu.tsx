import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { MenuIcon } from "@/components/icons";

export default function App() {
    return (
        <Dropdown>
            <DropdownTrigger>
                <Button
                    variant="light"
                    radius="none"
                    className="text-sm font-bold"
                    startContent={<MenuIcon/>}
                >
                    MENU
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="new">ChatGPT-Web</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}

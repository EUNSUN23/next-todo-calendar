import React, {ReactElement} from 'react';
import {Menu} from "@headlessui/react";

export interface MenuButtonProps {
    menuButton:ReactElement;
}

function MenuButton({menuButton}:MenuButtonProps) {
    return (
        <div>
            <Menu.Button className="flex items-center ">
                <span className="sr-only">Open options</span>
                {menuButton}
            </Menu.Button>
        </div>
    );
}

export default MenuButton;
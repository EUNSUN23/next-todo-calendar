import React, {ReactElement} from 'react'
import {Menu} from '@headlessui/react'
import MenuButton from "@/components/ui/Dropdown/MenuButton";
import MenuList, {MenuItemObject} from "@/components/ui/Dropdown/MenuList";


interface DropdownProps {
    menuItems: MenuItemObject[];
    menuButton: ReactElement;
}

export default function Dropdown({menuItems, menuButton}: DropdownProps) {

    return (
        <Menu as="div"
              className="relative inline-block text-center"
        >
            <MenuButton menuButton={menuButton}/>
            <MenuList menuItems={menuItems}/>
        </Menu>
    )
}

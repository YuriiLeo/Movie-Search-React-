import React from 'react';
import items from './items';
import NavbarMenuItem from './NavbarMenuItem/NavbarMenuItem';

export default function NavbarMenu() {
    return (
        <ul style={{
            display:"flex",
            justifyContent: "flex-start",
            fontSize:20
        }}>
            {
            items.map(({ id, to, text, icon }) => (
                <NavbarMenuItem
                    key={id}
                    id={id}
                    to={to}
                    text={text}
                    Icon={icon}
                />
            ))}
        </ul>
    );
};

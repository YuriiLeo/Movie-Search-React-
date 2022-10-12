import React from 'react';
// import { NavLink } from 'react-router-dom';
import { Item, Link } from './NavbarMenuItem.styled';

// const getClassName = ({ isActive }) => {
//     return isActive ? `` : ``;
// }
// add styled for changed color active link

export default function NavbarMenuItem({id, to, text, Icon}) {
  return (
    <Item>
      {/* add className={getClassName} in NavLink */}
      <Link key={id} to={to}>
        <Icon style={{marginRight: 3}} size="20"/>
          {text}
      </Link>
    </Item>
  )
}

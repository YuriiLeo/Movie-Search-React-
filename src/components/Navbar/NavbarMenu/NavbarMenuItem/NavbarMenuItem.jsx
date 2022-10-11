import React from 'react';
import { NavLink } from 'react-router-dom';

// const getClassName = ({ isActive }) => {
//     return isActive ? `` : ``;
// }
// add styled for changed color active link

export default function NavbarMenuItem({id, to, text, Icon}) {
  return (
    <li>
      {/* add className={getClassName} in NavLink */}
      <NavLink key={id} to={to}>
          <Icon size="16"/>
          {text}
      </NavLink>
    </li>
  )
}

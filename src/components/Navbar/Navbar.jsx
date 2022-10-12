import { NavbarMenuStyled } from './Navbar.styled'; 
import React from 'react';
// import { Link } from 'react-router-dom';
import NavbarMenu from './NavbarMenu/NavbarMenu';

export default function Navbar() {
  return (
      <NavbarMenuStyled as="header">
          <div>
              <div>
                  <NavbarMenu/>
              </div>
          </div>
      </NavbarMenuStyled>
  )
}

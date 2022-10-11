import React from 'react';
// import { Link } from 'react-router-dom';
import NavbarMenu from './NavbarMenu/NavbarMenu';

export default function Navbar() {
  return (
      <nav as="header" style={{borderBottom:"1px solid #090909"}}>
          {/* <div>
              <div> */}
                  <NavbarMenu/>
              {/* </div>
          </div> */}
      </nav>
  )
}

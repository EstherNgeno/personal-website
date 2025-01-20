import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
} from './NavbarElements';

const Navbar = () => {
    return (
      <>
        <Nav>
          <NavLink to='/bio'activeStyle>
            Esther Ngeno
          </NavLink>
          <NavMenu>
            <NavLink to='/home' activeStyle>
              Home
            </NavLink>
            <NavLink to='/about' activeStyle>
              About
            </NavLink>
            <NavLink to='/projects' activeStyle>
              Projects
            </NavLink>
            <NavLink to='/blog' activeStyle>
              Blog
            </NavLink>
            <NavLink to='/links' activeStyle>
                Links
            </NavLink>
          </NavMenu>
        </Nav>
      </>
    );
  };
  
export default Navbar;

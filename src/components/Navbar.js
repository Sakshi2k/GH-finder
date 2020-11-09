import React from "react";
import { Link } from "react-router-dom";
import Search from './users/Search';
import { Navbar, Nav } from 'react-bootstrap';

import logo from './imgs/githubIcon.png';

const AppNavbar = (props) => (
  <Navbar bg="dark" expand="lg">
    <Navbar.Brand>
      <img src={logo} alt="github" className='logo' />
    </Navbar.Brand>
    <Navbar.Brand className='navbarBrand'><h4>Github Finder</h4></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Link className='navlink' to='/'>Home</Link>
        <Link className='navlink' to='/about'>About</Link>
      </Nav>
      <Search />
    </Navbar.Collapse>
  </Navbar>

);

export default AppNavbar;

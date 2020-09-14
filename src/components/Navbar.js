import React from "react";
import { Link } from "react-router-dom";
// import Search from "./Search";

const Navbar = () => (
  <nav className='navbar'>
    <p className='bold'>GITHUB FINDER</p>
    {/* <Search /> */}
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;

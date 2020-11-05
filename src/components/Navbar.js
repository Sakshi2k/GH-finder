import React from "react";
import { Link } from "react-router-dom";

import logo from './imgs/githubIcon.png';

const Navbar = () => (
  <nav className='navbar'>
    <div className='tooltip'>
      <img src={logo} alt="github" className='logo' />
      <span className="tooltiptext">Not an official website by Github</span>
    </div>
    <p className='bold'>GITHUB FINDER</p>
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

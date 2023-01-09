import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoArrowBackCircleSharp } from 'react-icons/io5';
import { FaMicrophone, FaRegSun } from 'react-icons/fa';

const NavBar = () => (
  <div className="navBar">
    <NavLink to="/"><IoArrowBackCircleSharp /></NavLink>
    <NavLink to="/">Logo</NavLink>
    <div className="navIcons">
      <NavLink to="/"><FaMicrophone /></NavLink>
      <NavLink to="/"><FaRegSun /></NavLink>
    </div>
  </div>
);

export default NavBar;

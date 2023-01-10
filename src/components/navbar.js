import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { IoArrowBackCircleSharp } from 'react-icons/io5';
import { FaMicrophone, FaRegSun } from 'react-icons/fa';

const NavBar = () => {
  const location = useLocation();
  let goBack = '';
  if (location.pathname !== '/') {
    goBack = true;
  } else {
    goBack = false;
  }

  return (
    <div className="navBar">
      {goBack ? <NavLink to="/"><IoArrowBackCircleSharp /></NavLink> : null}
      {'  '}
      <NavLink to="/">Crypto Currency</NavLink>
      <div className="navIcons">
        <NavLink to="/"><FaMicrophone /></NavLink>
        <NavLink to="/"><FaRegSun /></NavLink>
      </div>
    </div>
  );
};

export default NavBar;

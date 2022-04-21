import React from "react";
import { NavLink } from "react-router-dom";
import c from './NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={c.nav}>
      <div className={c.item}>
        <h1>
          <NavLink to="/profile" activeClassName={c.activeLink}> Profile </NavLink>
        </h1>
      </div>
      <div>
        <h1 className={c.item}>
          <NavLink to='/dialogs' activeClassName={c.activeLink} > Messages </NavLink>
        </h1>
      </div>
      <div className={c.item}>
        <h1>
          <NavLink to='/news' activeClassName={c.activeLink}> News </NavLink>
        </h1>
      </div>
      <div className={c.item}>
        <h1>
          <NavLink to='/settings' activeClassName={c.activeLink}> Settings </NavLink>
        </h1>
      </div>
    </nav>
  )
}

export default NavBar;
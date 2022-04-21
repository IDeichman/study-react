import React from "react";
import { NavLink } from "react-router-dom";
import c from './NavBar.module.css';

const NavBar = () => {
  return <nav className={c.nav}>
    <div className={c.item}>
      <h1>
        <NavLink to="/profile" activeClassName={c.active}> Profile </NavLink>
      </h1>
    </div>
    <div>
      <h1 className={c.item}>
        <NavLink to='/dialogs' activeClassName={c.active}> Messages </NavLink>
      </h1>
    </div>
    <div className={c.item}>
      <h1>
        <NavLink to='/news'>News</NavLink>
      </h1>
    </div>
    <div className={c.item}>
      <h1>
        <NavLink to='/settings'> Settings </NavLink>
      </h1>
    </div>
  </nav>
}

export default NavBar;
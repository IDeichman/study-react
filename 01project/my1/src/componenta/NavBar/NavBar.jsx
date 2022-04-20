import React from "react";
import c from './NavBar.module.css';

const NavBar = () => {
  return <nav className={c.nav}>
    <div className={c.item}>
      <h1>
        <a href="/profile"> Profile </a>
      </h1>
    </div>
    <div>
      <h1 className={c.item}>
        <a href='/dialogs'> Messages </a>
      </h1>
    </div>
    <div className={c.item}>
      <h1>
        <a href="/newsblock"> News </a>
      </h1>
    </div>
    <div className={c.item}>
      <h1>
        <a href='/setting'> Settings </a>
      </h1>
    </div>
  </nav>
}

export default NavBar;
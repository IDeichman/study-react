import React from "react";
import c from './NavBar.module.css';

const NavBar = () => {
    return <nav className={c.nav}>
    <div className={c.item}>
      <h1>
      Profile
      </h1>
    </div>
    <div>
      <h1 className={c.item}>
      Messages
      </h1>
    </div>
    <div className={c.item}>
      <h1>
        News
      </h1>
    </div>
    <div className={c.item}>
      <h1>
        Settings
      </h1>
    </div>
    </nav>
}

export default NavBar;
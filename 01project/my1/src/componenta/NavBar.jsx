import React from "react";
import './NavBar.module.css';

const NavBar = () =>{
    return <nav className='nav'>
    <div className="item">
      <h1>
      Profile
      </h1>
    </div>
    <div className="item">
      <h1>
      Messages
      </h1>
    </div>
    <div className="item">
      <h1>
        News
      </h1>
    </div>
    <div className="item">
      <h1>
        Settings
      </h1>
    </div>
    </nav>
}

export default NavBar;
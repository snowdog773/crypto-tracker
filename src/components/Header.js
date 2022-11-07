import React, { useState } from "react";
import hamburger from "../assets/simple_hamburger.svg";
import Nav from "./Nav";
const Header = () => {
  const [showMenu, updateShowMenu] = useState(false);

  const menuSwitch = () => {
    showMenu ? updateShowMenu(false) : updateShowMenu(true);
  };

  return (
    <>
      <header>
        <h1>Crypto Tracker</h1>
        <nav className="topNav">
          <Nav />
        </nav>

        <img
          className="menuIcon"
          src={hamburger}
          alt="menu icon"
          onClick={() => menuSwitch()}
        ></img>
      </header>
      {showMenu && (
        <nav className="dropDown">
          <Nav />
        </nav>
      )}
    </>
  );
};

export default Header;

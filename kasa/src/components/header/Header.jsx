import React from "react";
import { NavLink } from "react-router-dom";
import HeaderLogo from "../../assets/HeaderLogo.svg";
import "./Header.scss";
function Header() {
  return (
    <header>
      <img src={HeaderLogo} alt="Logo" />
      <nav>
        <NavLink className={"navlink"} to={"/"}>
          {"Accueil"}
        </NavLink>
        <NavLink className={"navlink"} to={"/About"}>
          {"Àpropos"}
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;

import { NavLink } from "react-router-dom";
import HeaderLogo from "../assets/HeaderLogo.svg";

function Header() {
  return (
    <header>
      <img src={HeaderLogo} alt="Logo" />
      <nav>
        <a> Accueil </a>
        <a> À propos </a>
      </nav>
    </header>
  );
}

export default Header;

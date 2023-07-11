import React from "react";
import FooterLogo from "../../assets/FooterLogo.svg";
import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <img src={FooterLogo} alt="Logo" />
      c'est le footer
    </footer>
  );
}

export default Footer;

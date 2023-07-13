import React from "react";
import FooterLogo from "../../assets/FooterLogo.svg";
import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <div>
        <img src={FooterLogo} alt="Logo" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;

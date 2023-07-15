import { useState } from "react";
import VectorDown from "../../assets/VectorDown.svg";
import VectorUp from "../../assets/VectorUp.svg";
import "./Collapse.scss";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div>
      <h2 onclick={toggleOpen}>{title}</h2>
      <img
        src={isOpen ? VectorUp : VectorDown}
        alt={isOpen ? "fermer" : "Ouvrir"}
      />
      <div>{content}</div>
    </div>
  );
}

export default Collapse;

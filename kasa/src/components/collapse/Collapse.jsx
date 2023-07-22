import { useState } from "react";
import VectorDown from "../../assets/VectorDown.svg";
import VectorUp from "../../assets/VectorUp.svg";
import "./Collapse.scss";

function Collapse({ title, content, children, collapseContent }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="containerCollapse">
      <div className={"header"} onClick={toggleOpen}>
        <h2>{title}</h2>
        <img
          src={isOpen ? VectorUp : VectorDown}
          alt={isOpen ? "fermer" : "Ouvrir"}
        />
      </div>
      {isOpen && (
        <div className={`${collapseContent} ${content}`}>{children}</div>
      )}
    </div>
  );
}

export default Collapse;

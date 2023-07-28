import { useState } from "react";
import VectorDown from "../../assets/VectorDown.svg";
//import VectorUp from "../../assets/VectorUp.svg";
import "./Collapse.scss";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className={`containerCollapse`}>
      <div className="header" onClick={toggleOpen}>
        <h2>{title}</h2>
        <img
          className={`arrow ${isOpen ? "open" : "close"}`}
          src={VectorDown}
          alt={"Arrow"}
        />
      </div>
      {isOpen && (
        <div className={`description ${isOpen ? "open" : ""}`}>
          {Array.isArray(content) ? (
            <ul>
              {content.map((element, index) => (
                <li key={index} className="element">
                  {element}
                </li>
              ))}
            </ul>
          ) : (
            <p>{content}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Collapse;

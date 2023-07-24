import { useState } from "react";
import leftVector from "../assets/VectorLeft.svg";
import rightVector from "../assets/VectorRight.svg";

function Gallery({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftClick = () => {
    if (currentIndex === 0) {
      setCurrentIndex(pictures.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleRightClick = () => {
    if (currentIndex === pictures.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="gallery">
      {pictures.length > 1 && (
        <img
          className="leftVector"
          src={leftVector}
          alt="Précédent"
          onClick={handleLeftClick}
        />
      )}
      <img
        className="currentPicture"
        src={pictures[currentIndex]}
        alt={`Logement ${currentIndex + 1}`}
      />
      {pictures.length > 1 && (
        <img
          className="rightVector"
          src={rightVector}
          alt="Suivant"
          onClick={handleRightClick}
        />
      )}
    </div>
  );
}

export default Gallery;

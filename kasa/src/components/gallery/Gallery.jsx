import { useState } from "react";
import VectorLeft from "../../assets/VectorLeft.svg";
import VectorRight from "../../assets/VectorRight.svg";
import "./Gallery.scss";

function Gallery({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNavigation = (nextIndex) => {
    const newIndex = (nextIndex + pictures.length) % pictures.length;
    setCurrentIndex(newIndex);
  };

  if (!pictures || pictures.length === 0) {
    return null;
  }

  const showNavigation = pictures.length > 1;

  return (
    <div className="gallery">
      {showNavigation && (
        <>
          <img
            className="VectorLeft"
            src={VectorLeft}
            alt="Précédent"
            onClick={() => handleNavigation(currentIndex - 1)}
          />
          <div className="counter">
            {currentIndex + 1} / {pictures.length}
          </div>
          <img
            className="VectorRight"
            src={VectorRight}
            alt="Suivant"
            onClick={() => handleNavigation(currentIndex + 1)}
          />
        </>
      )}
      <img
        className="currentPicture"
        src={pictures[currentIndex]}
        alt={`Logement ${currentIndex + 1}`}
      />
    </div>
  );
}

export default Gallery;

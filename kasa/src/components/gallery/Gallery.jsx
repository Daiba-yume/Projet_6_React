import { useState } from "react";
import VectorLeft from "../../assets/VectorLeft.svg";
import VectorRight from "../../assets/VectorRight.svg";
import "../../styles/Gallery.scss";

function Gallery({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftClick = () => {
    if (pictures && currentIndex === 0) {
      setCurrentIndex(pictures.length - 1);
    } else if (pictures) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleRightClick = () => {
    if (pictures && currentIndex === pictures.length - 1) {
      setCurrentIndex(0);
    } else if (pictures) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  if (!pictures || pictures.length === 0) {
    return null;
  }

  return (
    <div className="gallery">
      {pictures.length > 1 && (
        <img
          className="VectorLeft"
          src={VectorLeft}
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
          className="VectorRight"
          src={VectorRight}
          alt="Suivant"
          onClick={handleRightClick}
        />
      )}

      {/* Ajout du compteur */}
      <div className="counter">
        {currentIndex + 1} / {pictures.length}
      </div>
    </div>
  );
}

export default Gallery;

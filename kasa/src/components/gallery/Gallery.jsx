import { useState } from "react";
import VectorLeft from "../../assets/VectorLeft.svg";
import VectorRight from "../../assets/VectorRight.svg";
import "./Gallery.scss";

function Gallery({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftClick = () => {
    setCurrentIndex((currentIndex - 1 + pictures.length) % pictures.length);
  };

  const handleRightClick = () => {
    setCurrentIndex((currentIndex + 1) % pictures.length);
  };

  if (!pictures || pictures.length === 0) {
    return null;
  }

  const showCounter = pictures.length > 1;
  const isFirstImage = currentIndex === 0;
  const isLastImage = currentIndex === pictures.length - 1;

  return (
    <div className="gallery">
      {showCounter && (
        <div className="counter">
          {currentIndex + 1} / {pictures.length}
        </div>
      )}
      {!isFirstImage && (
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
      {!isLastImage && (
        <img
          className="VectorRight"
          src={VectorRight}
          alt="Suivant"
          onClick={handleRightClick}
        />
      )}
    </div>
  );
}

export default Gallery;

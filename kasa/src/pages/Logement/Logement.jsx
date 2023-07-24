import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Collapse from "../../components/collapse/Collapse";
import Rating from "../../components/rating/Rating";
import Gallery from "../../components/gallery/Gallery";

function Logement({ logement }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!logement) {
      navigate("/not-found");
    }
  }, [logement, navigate]);

  if (!logement) {
    return null;
  }

  return (
    <div>
      <Gallery pictures={logement.pictures} />
      <div className="logementContainer">
        <h1 className="title">{logement.title}</h1>
        <h2 className="location">{logement.location}</h2>
        <ul className="tagsContainer">
          {logement.tags.map((tag, index) => (
            <li key={index} className="tags">
              {tag}
            </li>
          ))}
        </ul>
        <div className="hostContainer">
          <div className="hostDef">
            <h2>{logement.host.name}</h2>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
          <Rating rating={logement.rating} className="rating" />
        </div>
        <div className="collapseContainer">
          <Collapse
            title="Description"
            className="collapseDescription"
            contentClassName="collapseContent"
          >
            <p className="collapseP">{logement.description}</p>
          </Collapse>
          <Collapse
            title="Equipements"
            className="collapseEquipments"
            contentClassName="collapseContent"
          >
            <ul className="collapseUl">
              {logement.equipments.map((equipments, index) => (
                <li key={index} className="equipments">
                  {equipments}
                </li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
    </div>
  );
}

export default Logement;

import { useParams } from "react-router-dom";
import Logement from "../Logement/Logement";
import logementsData from "../../datas/logements.json";

function LogementPage() {
  const { id } = useParams();
  const logement = logementsData.find((logement) => logement.id === id);

  return (
    <div>
      <Logement logement={logement} />
    </div>
  );
}

export default LogementPage;

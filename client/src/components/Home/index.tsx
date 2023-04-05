import Default from "../Default";
import "./style.scss";

const Home = () => {
  return (
    <Default>
      <div className="home-wrapper">
        Software Engineer PlaniSense – Test Technique
        <p className="home-p">
          Sujet : À partir d'un fichier csv listant l'ensemble des arbres
          présents sur le territoire parisien, récupérer certaines infos, les
          trier puis les afficher
          <p className="goal-p">
            Objectif 1: Isoler et trier le nombre d'arbres par arrondissement
            (ou commune attachés a Paris)
          </p>
          <p className="goal-p">
            Objectif 2: Isoler et trier le genre et le nombre d'arbres
            appartenant à ce genre
          </p>
        </p>
      </div>
    </Default>
  );
};

export default Home;

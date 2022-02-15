import { Link, useNavigate } from "react-router-dom";
import LogoSource from "../assets/logovinted.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ token, setUser }) => {
  const navigate = useNavigate();

  return token ? (
    <button
      onClick={() => {
        setUser(null);
        navigate("/");
      }}
    >
      Se déconnecter
    </button>
  ) : (
    <div className="header">
      <Link to="/" className="homepage">
        <img className="logovinted" src={LogoSource} alt=""></img>
      </Link>

      <div className="loupeetforme">
        <FontAwesomeIcon
          icon="fa-solid fa-magnifying-glass"
          className="loupe"
        />
        <form className="rechercherdesarticles">
          <input
            className="input"
            type="text"
            placeholder="Rechercher des articles"
          />
        </form>
      </div>

      <div className="sinscrireseconnecter">
        <Link to="/signup" className="sinscrire">
          S'inscrire
        </Link>
        <Link to="/signup" className="seconnecter">
          Se connecter
        </Link>
      </div>
      <buttun className="vendslesarticles" Link to="">
        Vends maintenant
      </buttun>
      <buttun className="ptInt" Link to="">
        ?
      </buttun>
      <buttun className="Fr" Link to="">
        FR
      </buttun>
    </div>
  );
};

export default Header;

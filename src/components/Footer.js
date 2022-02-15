import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Link className="a" to="/confid">
        Politique de confidentialité
      </Link>
      <Link className="a" to="/pcookies">
        Politique de cookies
      </Link>
      <Link className="a" to="/termcond">
        Termes et conditions
      </Link>
      <Link className="a" to="/conditV">
        Conditions de vente
      </Link>
      <Link className="a" to="/conditUt">
        Conditions d'utilisation
      </Link>
    </div>
  );
};
export default Footer;

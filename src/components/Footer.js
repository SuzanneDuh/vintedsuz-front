import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Link className="a" to="/confid">
        Politique de confidentialité
      </Link>
      <Link className="b" to="/pcookies">
        Politique de cookies
      </Link>
      <Link className="c" to="/termcond">
        Termes et conditions
      </Link>
      <Link className="d" to="/conditV">
        Conditions de vente
      </Link>
      <Link className="e" to="/conditUt">
        Conditions d'utilisation
      </Link>
    </div>
  );
};
export default Footer;

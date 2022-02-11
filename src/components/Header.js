import { Link, useNavigate } from "react-router-dom";

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
    <div>
      <Link to="/signup">S'inscrire</Link>
      <Link to="/login">Se connecter</Link>
    </div>
  );
};

export default Header;

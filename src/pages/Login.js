import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );

      if (response.data.token) {
        setUser(response.data.token);
        navigate("/");
      }
    } catch (error) {
      if (error.response.status === 400 || error.response.status === 401) {
        setErrorMessage("Erreur d'email ou de mdp");
      }
    }
  };

  return (
    <div className="seconnecter">
      <div className="titreseconnecter">Se connecter</div>
      <form onSubmit={handleSubmit}>
        <input
          className="ab"
          type="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <input
          className="ab"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <input className="d" type="submit" value="Je me connecte" />
        <br />
        <span>{errorMessage}</span>
      </form>
    </div>
  );
};

export default Login;

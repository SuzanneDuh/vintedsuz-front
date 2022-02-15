import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email: email,
          username: username,
          password: password,
          newsletter: newsletter,
        }
      );
      if (response.data.token) {
        setUser(response.data.token);
        navigate("/");
      }
    } catch (error) {
      console.log("Signup Error ===> ", error.message);
      console.log("Catch error ===> ", error.response);
      if (error.response.status === 409) {
        setErrorMessage("Cet email a déjà un compte");
      }
    }
  };

  return (
    <div className="signup">
      <div className="titresinscrire">S'inscrire</div>
      <form onSubmit={handleSubmit}>
        <input
          className="ab"
          type="text"
          placeholder="Mon nom d'utilisateur"
          onChange={(event) => setUsername(event.target.value)}
        />
        <br />
        <input
          className="ab"
          type="email"
          placeholder="Mon email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <input
          className="ab"
          type="password"
          placeholder="Mon mot de passe"
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />

        <div>
          <input
            className="checkboxnews"
            type="checkbox"
            onChange={(event) => setNewsletter(event.target.checked)}
          />
          <span> M'inscrire à la newsletter</span>
        </div>

        <br />
        <div className="dede">
          <input
            className="enminscrivant"
            type="checkbox"
            onChange={(event) => setNewsletter(event.target.checked)}
          />
          <span>
            {" "}
            En m'inscrivant, je confirme que j'ai accepté les{" "}
            <Link to="/Termcond" className="abc">
              Termes et Conditions
            </Link>{" "}
            et les{" "}
            <Link to="/Conditv" className="abc">
              Conditions de vente pro de Vinted
            </Link>
            , avoir lu la{" "}
            <Link to="/Confid" className="abc">
              Politique de Confidentialité
            </Link>{" "}
            et que j'ai plus de 18 ans.
          </span>
        </div>

        <br />
        <input className="d" type="submit" value="Je m'inscris" />
        <br />
        <span>{errorMessage}</span>
      </form>
    </div>
  );
};

export default Signup;

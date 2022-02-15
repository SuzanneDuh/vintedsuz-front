import { Link, useNavigate } from "react-router-dom";
import LogoSource from "../assets/logovinted.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ token, setUser }) => {
  const navigate = useNavigate();

  return (
    <div className="header">
      {token ? (
        <button
          onClick={() => {
            setUser(null);
            navigate("/");
          }}
        >
          Se déconnecter
        </button>
      ) : (
        <div className="h">
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
                className="rechart"
                type="text"
                placeholder="Rechercher des articles"
              />
            </form>
          </div>

          <div className="sinscrireseconnecter">
            <Link to="/signup" className="sinscrire">
              S'inscrire
            </Link>
            <Link to="/login" className="seconnecter">
              Se connecter
            </Link>
          </div>
        </div>
      )}

      <Link className="vendslesarticles" to="/publish">
        Vends maintenant
      </Link>
      {/* <buttun className="ptInt" Link to="">
        ?
      </buttun>
      <buttun className="Fr" Link to="">
        FR
      </buttun> */}
    </div>
  );
};

export default Header;

//   return token ? (
//     <button
//       onClick={() => {
//         setUser(null);
//         navigate("/");
//       }}
//     >
//       Se déconnecter
//     </button>
//   ) : (
//     <div className="header">
//       <Link to="/" className="homepage">
//         <img className="logovinted" src={LogoSource} alt=""></img>
//       </Link>

//       <div className="loupeetforme">
//         <FontAwesomeIcon
//           icon="fa-solid fa-magnifying-glass"
//           className="loupe"
//         />
//         <form className="rechercherdesarticles">
//           <input
//             className="input"
//             type="text"
//             placeholder="Rechercher des articles"
//           />
//         </form>
//       </div>

//       <div className="sinscrireseconnecter">
//         <Link to="/signup" className="sinscrire">
//           S'inscrire
//         </Link>
//         <Link to="/login" className="seconnecter">
//           Se connecter
//         </Link>
//       </div>
//       <Link className="vendslesarticles" to="/publish">
//         Vends maintenant
//       </Link>
//       <buttun className="ptInt" Link to="">
//         ?
//       </buttun>
//       <buttun className="Fr" Link to="">
//         FR
//       </buttun>
//     </div>
//   );
// };

// export default Header;

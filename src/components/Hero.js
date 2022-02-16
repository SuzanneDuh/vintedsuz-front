import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="imgtri">
      <img
        className="imagehero"
        src="https://www.vinted.fr/assets/seller-promotion/other/banner-phones-2ab679df561d617d4e0ca27f862f78cf1bfeeba70fcdaa9afc19cc0fcb102c26.jpg"
        alt=""
      ></img>
      <div className="tri">
        <div className="textri">Prêts à faire du tri dans vos placards ?</div>
        {/* <div className="comvend">Commencer à vendre !</div> */}
        <Link className="comvend" to="/publish">
          Commencer à vendre !
        </Link>
      </div>
    </div>
  );
};
export default Hero;

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import Hero from "../components/Hero";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(2);

  const limit = 5;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offers?limit=${limit}&page=${page}`
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [page]);

  return isLoading ? (
    <div className="patientez">Patientez svp</div>
  ) : (
    <div>
      <Hero />

      <div>
        <div className="Articlespopulaires">Articles populaires</div>
        <div className="carroussel">
          {data.offers.map((offer) => {
            return (
              <Link key={offer._id} to={`/offer/${offer._id}`}>
                <div className="article">
                  {/* <div className="articletitle">{offer.product_name}</div> */}
                  <img
                    classeName="articleimg"
                    src={offer.product_image.secure_url}
                    alt=""
                  />
                </div>
              </Link>
            );
          })}
        </div>
        <div className="page">
          <button className="prec" onClick={() => setPage(page - 1)}>
            Page précédente
          </button>
          <button className="voirpl" onClick={() => setPage(page + 1)}>
            Voir plus
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

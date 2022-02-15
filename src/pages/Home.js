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
    <div>Patienteeeeezzzzz svp</div>
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
                  <h2>{offer.product_name}</h2>
                  <img
                    classeName="articleimg"
                    src={offer.product_image.secure_url}
                    alt=""
                  />
                </div>
              </Link>
            );
          })}
          <button onClick={() => setPage(page - 1)}>Page précédente</button>
          <button onClick={() => setPage(page + 1)}>Page suivante</button>
        </div>
      </div>
    </div>
  );
};

export default Home;

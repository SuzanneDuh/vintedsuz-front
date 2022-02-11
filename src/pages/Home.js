import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offers"
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <div>Patienteeeeezzzzz svp</div>
  ) : (
    <div>
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
    </div>
  );
};

export default Home;

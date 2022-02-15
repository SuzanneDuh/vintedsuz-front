import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Offer = () => {
  const { id } = useParams();

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <div>Patientez svp</div>
  ) : (
    <div>
      <h2>{data.product_name}</h2>
      <span>{data.product_price}</span>
      <div>
        {data.product_details.map((item, index) => {
          const keys = Object.keys(item);
          return (
            <div key={index}>
              <span>
                {keys[0]} : {item[keys[0]]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Offer;

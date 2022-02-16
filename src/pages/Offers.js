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
    <div className="page">
      <div className="column">
        <div className="columnun">
          <img src={data.product_image.secure_url} alt=""></img>
        </div>

        <div className="annonce">
          <span className="price">{data.product_price} € </span>{" "}
          <div>
            {data.product_details.map((item, index) => {
              const keys = Object.keys(item);
              return (
                <div className="aze" key={index}>
                  <div className="azer">{keys[0]}</div>
                  <div className="azert">{item[keys[0]]}</div>
                </div>
              );
            })}
          </div>
          <h2 className="nameproduct">{data.product_name}</h2>
          {/* <div className="nameproduct">{data.product_details.etat}</div> */}
          <div className="avatarimg">
            <img src={data.owner.account.avatar.secure_url} alt="" />
          </div>
          <span className="nameusername"> {data.owner.account.username} </span>
          <button
            className="bu1"
            // className="achetercetarticle"
            // onClick={() => }>
          >
            Acheter cet article
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offer;

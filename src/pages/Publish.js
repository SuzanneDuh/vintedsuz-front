import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Publish = ({ token }) => {
  const [picture, setPicture] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");

  const [preview, setPreview] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      if (title && price && picture) {
        const formData = new FormData();
        formData.append("picture", picture);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("brand", brand);
        formData.append("size", size);
        formData.append("color", color);
        formData.append("condition", condition);
        formData.append("city", city);
        formData.append("price", price);

        const response = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
          formData,
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.data._id) {
          navigate(`/offer/${response.data._id}`);
        }
      } else {
        setErrorMessage(
          " Les champs Titre, Prix et Photos sont obligatoires !"
        );
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return token ? (
    <form style={{ padding: 30 }} onSubmit={handleSubmit}>
      <div>
        <div style={{ height: 45, width: 180, border: "1px solid blue" }}>
          <label htmlFor="file">
            <span>+</span> <span>Ajouter une photo</span>
          </label>
        </div>
        <input
          style={{ display: "none" }}
          id="file"
          type="file"
          onChange={(event) => {
            setPicture(event.target.files[0]);
            setPreview(URL.createObjectURL(event.target.files[0]));
          }}
        />
      </div>
      {preview && <img src={preview} alt="" />}

      <br />
      <input
        type="text"
        placeholder="Titre"
        onChange={(event) => setTitle(event.target.value)}
      />
      <br />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Description"
        onChange={(event) => setDescription(event.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Marque"
        onChange={(event) => setBrand(event.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Taille"
        onChange={(event) => setSize(event.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Couleur"
        onChange={(event) => setColor(event.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Etat"
        onChange={(event) => setCondition(event.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Ville"
        onChange={(event) => setCity(event.target.value)}
      />
      <br />
      <input
        type="number"
        placeholder="Prix"
        onChange={(event) => setPrice(event.target.value)}
      />
      <br />
      <input value="Ajouter mon annonce" className="d" type="submit" />
      {errorMessage}
    </form>
  ) : (
    <Navigate to="/login" />
  );
};

export default Publish;

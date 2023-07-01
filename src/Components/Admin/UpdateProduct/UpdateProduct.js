import React, { useEffect, useState } from "react";
import mc from "./updateProduct.module.scss";
import Header from "../../Header/Header";
import Modale from "../../smallElt/modale/Modale";
const UpdateProduct = () => {
  const productId = localStorage.getItem("productId");
  const token = localStorage.getItem("token");

  // I use the useState hook to store the recieved data and modify them easily
  const [product, setProduct] = useState({});
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [assistance, setAssistance] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [alt, setAlt] = useState("");
  const [description, setDescription] = useState("");
  const [flying, setFlying] = useState("");
  const [cockpit, setCockpit] = useState("");
  const [weapons, setWeapons] = useState("");
  const [ammo, setAmmo] = useState("");
  const [magazine, setMagazine] = useState("");
  const [range, setRange] = useState("");
  const [showModal, setShowModal] = useState(false);
  const message = `Are you sure you want to change this product : ${product.name} in the database?`;

  // The function I'm using to retrieve the full data set of a precise product
  const getItemForUpdate = async () => {
    const response = await fetch(
      `http://localhost:4069/products/readone/${productId}`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );
    const data = await response.json();
    setProduct(data.data);
    setName(data.data.name);
    setType(data.data.type);
    setAssistance(data.data.assistance);
    setPrice(data.data.price);
    setImg(data.data.img);
    setAlt(data.data.alt);
    setDescription(data.data.description);
    setFlying(data.data.flying);
    setCockpit(data.data.cockpit);
    setWeapons(data.data.weapons);
    setAmmo(data.data.ammo);
    setMagazine(data.data.magazine);
    setRange(data.data.range);
  };
  // function to handle submit of the update button and the `put` method
  const handleUpdate = async () => {
    try {
      const response = await fetch(
        `http://localhost:4069/products/update/${productId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${token}`,
          },
          body: JSON.stringify({
            name,
            type,
            assistance,
            price,
            img,
            alt,
            description,
            flying,
            cockpit,
            weapons,
            ammo,
            magazine,
            range,
          }),
        }
      );
      if (response.ok) {
        setShowModal(false);
        alert(`The datas have been correctly updated in the database`);
        window.location.href = "/admin/deleteproduct";
      }
    } catch (err) {
      return Error(err.message);
    }
  };
  useEffect(() => {
    getItemForUpdate();
  }, []);

  const handleModal = () => {
    if (!showModal) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };

  // each input goes with a setter to get the data easily
  return (
    <>
      <Header />
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          handleModal();
        }}
        className={`${mc.updateForm}`}
      >
        <div>
          <label htmlFor="">Name : </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Type : </label>
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Assistance : </label>
          <select
            onChange={(e) => setAssistance(e.target.value)}
            value={assistance}
          >
            <option value="true">true</option>
            <option value="false">false</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Price : </label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Img : </label>
          <input
            type="text"
            value={img}
            onChange={(e) => {
              setImg(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="">Alt : </label>
          <textarea
            cols="30"
            rows="7"
            value={alt}
            onChange={(e) => setAlt(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label htmlFor="">Description : </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            cols="30"
            rows="7"
          ></textarea>
        </div>
        {ammo ? (
          ``
        ) : (
          <div>
            <label htmlFor="">Flying : </label>
            <select value={flying} onChange={(e) => setFlying(e.target.value)}>
              <option value="true">true</option>
              <option value="false">false</option>
            </select>
          </div>
        )}

        {cockpit ? (
          <div>
            <label htmlFor="">Room in cockpit : </label>
            <input
              type="number"
              value={cockpit}
              onChange={(e) => setCockpit(e.target.value)}
            />
          </div>
        ) : (
          ""
        )}
        {weapons ? (
          <div>
            <label htmlFor="">Weaponry : </label>
            <select
              value={weapons}
              onChange={(e) => setWeapons(e.target.value)}
            >
              <option value="light">light</option>
              <option value="heavy">heavy</option>
              <option value="solid">solid</option>
            </select>
          </div>
        ) : (
          ""
        )}
        {ammo ? (
          <div>
            <label htmlFor="">Ammunition : </label>
            <input
              type="text"
              value={ammo}
              onChange={(e) => setAmmo(e.target.value)}
            />
          </div>
        ) : (
          ""
        )}
        {magazine ? (
          <div>
            <label htmlFor="">Magazine : </label>
            <input
              type="number"
              value={magazine}
              onChange={(e) => setMagazine(e.target.value)}
            />
          </div>
        ) : (
          ""
        )}
        {range ? (
          <div>
            <label htmlFor="">Range : </label>
            <select value={range} onChange={(e) => setRange(e.target.value)}>
              <option value="long range">long range</option>
              <option value="short range">short range</option>
              <option value="very long range">very long range</option>
            </select>
          </div>
        ) : (
          ""
        )}
        <button>submit changes</button>
      </form>
      {showModal ? (
        <Modale
          message={message}
          onConfirm={handleUpdate}
          onCancel={handleModal}
        />
      ) : (
        ``
      )}
    </>
  );
};

export default UpdateProduct;

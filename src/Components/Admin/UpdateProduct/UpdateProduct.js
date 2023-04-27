import React, { useEffect, useState } from "react";

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

  // The function i'm using to retrieve the full data set of a precise product
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
  // function to handle the submit of the update button and the `put` method
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

  // each input goes with a setter to get the data easily
  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdate();
        }}
      >
        <div>
          <label htmlFor="">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">type</label>
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">assistance</label>
          <input
            type="text"
            value={assistance}
            onChange={(e) => setAssistance(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">price</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">img</label>
          <input
            type="text"
            value={img}
            onChange={(e) => {
              setImg(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="">alt</label>
          <input
            type="text"
            value={alt}
            onChange={(e) => setAlt(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <input
          type="text"
          value={flying}
          onChange={(e) => setFlying(e.target.value)}
        />
        {cockpit ? (
          <input
            type="text"
            value={cockpit}
            onChange={(e) => setCockpit(e.target.value)}
          />
        ) : (
          ""
        )}
        {weapons ? (
          <input
            type="text"
            value={weapons}
            onChange={(e) => setWeapons(e.target.value)}
          />
        ) : (
          ""
        )}
        {ammo ? (
          <input
            type="text"
            value={ammo}
            onChange={(e) => setAmmo(e.target.value)}
          />
        ) : (
          ""
        )}
        {magazine ? (
          <input
            type="text"
            value={magazine}
            onChange={(e) => setMagazine(e.target.value)}
          />
        ) : (
          ""
        )}
        {range ? (
          <input
            type="text"
            value={range}
            onChange={(e) => setRange(e.target.value)}
          />
        ) : (
          ""
        )}
        <button>submit changes</button>
      </form>
    </div>
  );
};

export default UpdateProduct;

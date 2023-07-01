import React, { useState } from "react";
import Header from "../Header/Header";
import SelectElt from "../FormElts/selectElt/SelectElt";

const AddProduct = () => {
  const [selected, setSelected] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [assistance, setAssistance] = useState(false);
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const [alt, setAlt] = useState("");
  const [description, setDescription] = useState("");
  const [flying, setFlying] = useState(false);
  const [image, setImage] = useState(null);

  async function setArmorName(name) {
    let newName = "CA#" + name;
    setName(newName);
  }

  async function setVehicleName(name) {
    let newName = "WM#" + name;
    setName(newName);
  }

  async function setWeaponName(name) {
    let newName = "FA#" + name;
    setName(newName);
  }

  async function setArmorAssistance(assistance) {
    if (assistance === "yes") {
      setAssistance(true);
    } else if (assistance === "no") {
      setAssistance(false);
    }
  }
  async function setArmorFlying(flying) {
    if (flying === "yes") {
      setFlying(true);
    } else if (flying === "no") {
      setFlying(false);
    }
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append('image', image);
  //
  //   fetch('/upload', {
  //     method: 'POST',
  //     body: formData,
  //   })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data); // handle the response as needed
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  // };
  return (
    <>
      <Header />
      <main>
        <form action="#" encType={"multipart/form-data"} method={"post"}>
          <SelectElt onSelect={setSelected} />
          {selected === "armors" ? (
            <>
              <div>
                <label htmlFor="name">Name : </label>
                <input
                  type="text"
                  onChange={(e) => setArmorName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="type">Type : </label>
                <select
                  name="type"
                  id="type"
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                >
                  <option value="select">select a type</option>
                  <option value="agile">agile</option>
                  <option value="shielded">shielded</option>
                  <option value="hybrid">hybrid</option>
                </select>
              </div>
              <div>
                <label htmlFor="assistance">Assistance : </label>
                <select
                  name="selectAI"
                  id="selectAI"
                  onChange={setArmorAssistance(e.target.value)}
                >
                  <option value="ai">is the armor AI equipped?</option>
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select>
              </div>
              <div>
                <label htmlFor="price">Price : </label>
                <input
                  type="number"
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </div>
              <div>
                <label htmlFor="picAlt">Picture's alternative text</label>
                <textarea
                  name="picAlt"
                  id="picAlt"
                  cols="30"
                  rows="10"
                  onChange={(e) => {
                    setAlt(e.target.value);
                  }}
                ></textarea>
              </div>
              <div>
                <label htmlFor="armorDescription">Armor's description</label>
                <textarea
                  name="armorDesc"
                  id="armorDesc"
                  cols="30"
                  rows="10"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                ></textarea>
              </div>
              <div>
                <label htmlFor="flyingArmor">Flying : </label>
                <select
                  name="selectFlying"
                  id="selectFlying"
                  onChange={(e) => {
                    setArmorFlying(e.target.value);
                  }}
                >
                  <option value="flying">Can the armor fly?</option>
                  <option value="yes">yes</option>
                  <option value="no">no</option>
                </select>
              </div>
              <div>
                <label htmlFor="image">Upload an Image</label>
                <input
                  type="file"
                  accept={"image/*"}
                  onChange={handleImageUpload}
                />
              </div>
            </>
          ) : selected === "vehicles" ? (
            <div>
              <label htmlFor="name">Name :</label>
              <input
                type="text"
                onChange={(e) => setVehicleName(e.target.value)}
              />
            </div>
          ) : selected === "weapons" ? (
            <div>
              <label htmlFor="name">Name :</label>
              <input
                type="text"
                onChange={(e) => setWeaponName(e.target.value)}
              />
            </div>
          ) : (
            <p>Please pick a type for your new product</p>
          )}
        </form>
      </main>
    </>
  );
};

export default AddProduct;

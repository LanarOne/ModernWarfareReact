import React, { useState } from "react";
import mc from "./adminCard.module.scss";
import IcomoonReact from "icomoon-react";
import iconSet from "../../../Styles/icomoon/selection.json";
import Modale from "../modale/Modale";

const AdminCard = ({ product }) => {
  // the admin version of the display card for the products
  const token = localStorage.getItem("token");
  const [showModal, setShowModal] = useState(false);
  const message = `Are you sure you want to erase this product : ${product.name} from the database?`;

  // the function that handles when the 'delete' cross is clicked by an admin
  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:4069/products/delete/${product.id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `${token}`,
          },
        }
      );
      if (!response.ok) {
        return Error({ message: `cannot delete product` });
      }
      setShowModal(false);
      alert(`product ${product.name} successfully deleted`);
      window.location.reload();
    } catch (err) {
      return Error(err.message);
    }
  };

  const handleModal = () => {
    if (!showModal) {
      setShowModal(true);
    } else {
      setShowModal(false);
    }
  };

  // the function redirects the admin when she or he clicks the 'update' button
  const handleUpdate = () => {
    localStorage.setItem("productId", product.id);
    window.location.href = "/admin/updateproduct";
  };
  return (
    <article key={product.id} className={`${mc.adminCard}`}>
      <h3>{product.name}</h3>
      <div className={`${mc.blocDetail}`}>
        <ul>
          <li>Type : {product.type}</li>
          <li>AI assistance : {product.assistance ? `yes` : `none`}</li>
          {product.weapons ? (
            <li>
              Price : {product.price}{" "}
              <IcomoonReact
                iconSet={iconSet}
                color={"#ff6600"}
                size={20}
                icon="bitcoin"
              />{" "}
              / unit
            </li>
          ) : (
            <li>
              Price : {product.price}{" "}
              <IcomoonReact
                iconSet={iconSet}
                color={"#ff6600"}
                size={20}
                icon="bitcoin"
              />{" "}
              / 100 units
            </li>
          )}
          {/*conditional render depending on what sort of product should be displayed*/}
          {product.flying ? <li>{`flying`}</li> : ``}
          {product.cockpit ? (
            <li>{`Room in cockpit : ${product.cockpit}`}</li>
          ) : (
            ``
          )}
          {product.weapons ? <li>{`Weaponry : ${product.weapons}`}</li> : ``}
          {product.ammo ? <li>{`Caliber : ${product.ammo}`}</li> : ``}
          {product.magazine ? <li>{`Magazine : ${product.magazine}`}</li> : ``}
          {product.range ? <li>{`${product.range}`}</li> : ``}
        </ul>
      </div>
      <button onClick={handleModal}>x</button>
      <button onClick={handleUpdate}>update</button>
      {showModal && (
        <Modale
          message={message}
          onConfirm={handleDelete}
          onCancel={handleModal}
        />
      )}
    </article>
  );
};

export default AdminCard;

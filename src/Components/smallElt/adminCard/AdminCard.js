import React from "react";
import mc from "../card/card.module.scss";
import IcomoonReact from "icomoon-react";
import iconSet from "../../../Styles/icomoon/selection.json";

const AdminCard = ({ product }) => {
  // the admin version of the display card for the products
  const token = localStorage.getItem("token");

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
      alert(`product ${product.name} successfully deleted`);
      window.location.reload();
    } catch (err) {
      return Error(err.message);
    }
  };

  // the function redirects the admin when he clicks the 'update' button
  const handleUpdate = () => {
    localStorage.setItem("productId", product.id);
    window.location.href = "/admin/updateproduct";
  };
  return (
    <article key={product.id} className={`${mc.card}`}>
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
          <li>{product.description}</li>
        </ul>
      </div>
      <button onClick={handleDelete}>x</button>
      <button onClick={handleUpdate}>update</button>
    </article>
  );
};

export default AdminCard;

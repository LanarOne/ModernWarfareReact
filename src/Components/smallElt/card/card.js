import React from "react";
import mc from "./card.module.scss";
import iconSet from "../../../Styles/icomoon/selection.json";
import IcomoonReact from "icomoon-react";
import CA10_3 from "../../../img/CA10_3.png";
import CA45_5 from "../../../img/CA45_5.png";
import CA45_8 from "../../../img/CA45_8.png";
import CA53_2 from "../../../img/CA53_2.png";
import CA53_8 from "../../../img/CA53_8.png";
import CA54_5 from "../../../img/CA54_5.png";
import CA63_3 from "../../../img/CA63_3.png";
import CA74_3 from "../../../img/CA74_3.png";
import CA74_6 from "../../../img/CA74_6.png";
import CA75_1 from "../../../img/CA75_1.png";
import CA75_5 from "../../../img/CA75_5.png";
import CA92_5 from "../../../img/CA92_5.png";
import CA94_3 from "../../../img/CA94_3.png";
import CA94_7 from "../../../img/CA94_7.png";
import CA94_9 from "../../../img/CA94_9.png";
import CA95_2 from "../../../img/CA95_2.png";
import CA98_2 from "../../../img/CA98_2.png";
import CA98_4 from "../../../img/CA98_4.png";
import CA98_7 from "../../../img/CA98_7.png";
import CA99_2 from "../../../img/CA99_2.png";
import CA99_5 from "../../../img/CA99_5.png";
import CA99_6 from "../../../img/CA99_6.png";
import CA101_1 from "../../../img/CA101_1.png";
import CA162_4 from "../../../img/CA162_4.png";
import CA162_7 from "../../../img/CA162_7.png";

const Card = ({ product }) => {
  console.log(product.img);
  return (
    <article key={product.id} className={`${mc.card}`}>
      <h3>{product.name}</h3>
      <img src={`${product.img}`} alt="" />
      <div className="stats">
        <ul>
          <li>Type : {product.type}</li>
          <li>AI assistance : {product.assistance ? `yes` : `no`}</li>
          <li>
            Price : {product.price}{" "}
            <IcomoonReact
              iconSet={iconSet}
              color={"#ff6600"}
              size={20}
              icon="bitcoin"
            />
          </li>
          {product.flying ? <li>{`flying`}</li> : ``}
        </ul>
      </div>
    </article>
  );
};

export default Card;

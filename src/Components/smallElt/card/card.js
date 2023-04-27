import React from "react";
import mc from "./card.module.scss";
import iconSet from "../../../Styles/icomoon/selection.json";
import IcomoonReact from "icomoon-react";
import CA10_3 from "../../../public/img/CA10_3.png";
import CA45_5 from "../../../public/img/CA45_5.png";
import CA45_8 from "../../../public/img/CA45_8.png";
import CA53_2 from "../../../public/img/CA53_2.png";
import CA53_8 from "../../../public/img/CA53_8.png";
import CA54_5 from "../../../public/img/CA54_5.png";
import CA63_3 from "../../../public/img/CA63_3.png";
import CA74_3 from "../../../public/img/CA74_3.png";
import CA74_6 from "../../../public/img/CA74_6.png";
import CA75_1 from "../../../public/img/CA75_1.png";
import CA75_5 from "../../../public/img/CA75_5.png";
import CA92_5 from "../../../public/img/CA92_5.png";
import CA94_3 from "../../../public/img/CA94_3.png";
import CA94_7 from "../../../public/img/CA94_7.png";
import CA94_9 from "../../../public/img/CA94_9.png";
import CA95_2 from "../../../public/img/CA95_2.png";
import CA98_2 from "../../../public/img/CA98_2.png";
import CA98_4 from "../../../public/img/CA98_4.png";
import CA98_7 from "../../../public/img/CA98_7.png";
import CA99_2 from "../../../public/img/CA99_2.png";
import CA99_5 from "../../../public/img/CA99_5.png";
import CA99_6 from "../../../public/img/CA99_6.png";
import CA101_1 from "../../../public/img/CA101_1.png";
import CA162_4 from "../../../public/img/CA162_4.png";
import CA162_7 from "../../../public/img/CA162_7.png";
import FA84_6 from "../../../public/img/FA84_6.png";
import FA94_3 from "../../../public/img/FA94_3.png";
import FA97_5 from "../../../public/img/FA97_5.png";
import FA102_6 from "../../../public/img/FA102_6.png";
import FA106_3 from "../../../public/img/FA106_3.png";
import FA115_7 from "../../../public/img/FA115_7.png";
import FA118_7 from "../../../public/img/FA118_7.png";
import FA122_3 from "../../../public/img/FA122_3.png";
import FA128_1 from "../../../public/img/FA128_1.png";
import FA128_3 from "../../../public/img/FA128_3.png";
import FA128_7 from "../../../public/img/FA128_7.png";
import FA135_2 from "../../../public/img/FA135_2.png";
import FA135_6 from "../../../public/img/FA135_6.png";
import FA142_3 from "../../../public/img/FA142_3.png";
import FA144_3 from "../../../public/img/FA144_3.png";
import WM1_6 from "../../../public/img/WM1_6.png";
import WM2_3 from "../../../public/img/WM2_3.png";
import WM2_6 from "../../../public/img/WM2_6.png";
import WM3_8 from "../../../public/img/WM3_8.png";
import WM5_1 from "../../../public/img/WM5_1.png";
import WM6_9 from "../../../public/img/WM6_9.png";
import WM11_3 from "../../../public/img/WM11_3.png";
import WM12_8 from "../../../public/img/WM12_8.png";
import WM16_2 from "../../../public/img/WM16_2.png";
import WM17_9 from "../../../public/img/WM17_9.png";
import WM20_8 from "../../../public/img/WM20_8.png";
import WM24_4 from "../../../public/img/WM24_4.png";
import WM28_5 from "../../../public/img/WM28_5.png";
import WM28_7 from "../../../public/img/WM28_7.png";

// main component of the `shop` page which help to display the products nicely
const Card = ({ product }) => {
  let imgSrc = "";
  switch (product.img) {
    case "CA10_3":
      imgSrc = CA10_3;
      break;
    case "CA45_5":
      imgSrc = CA45_5;
      break;
    case "CA45_8":
      imgSrc = CA45_8;
      break;
    case "CA53_2":
      imgSrc = CA53_2;
      break;
    case "CA53_8":
      imgSrc = CA53_8;
      break;
    case "CA54_5":
      imgSrc = CA54_5;
      break;
    case "CA63_3":
      imgSrc = CA63_3;
      break;
    case "CA74_3":
      imgSrc = CA74_3;
      break;
    case "CA74_6":
      imgSrc = CA74_6;
      break;
    case "CA75_1":
      imgSrc = CA75_1;
      break;
    case "CA75_5":
      imgSrc = CA75_5;
      break;
    case "CA92_5":
      imgSrc = CA92_5;
      break;
    case "CA94_3":
      imgSrc = CA94_3;
      break;
    case "CA94_7":
      imgSrc = CA94_7;
      break;
    case "CA94_9":
      imgSrc = CA94_9;
      break;
    case "CA95_2":
      imgSrc = CA95_2;
      break;
    case "CA98_2":
      imgSrc = CA98_2;
      break;
    case "CA98_4":
      imgSrc = CA98_4;
      break;
    case "CA98_7":
      imgSrc = CA98_7;
      break;
    case "CA99_2":
      imgSrc = CA99_2;
      break;
    case "CA99_5":
      imgSrc = CA99_5;
      break;
    case "CA99_6":
      imgSrc = CA99_6;
      break;
    case "CA101_1":
      imgSrc = CA101_1;
      break;
    case "CA162_4":
      imgSrc = CA162_4;
      break;
    case "CA162_7":
      imgSrc = CA162_7;
      break;
    case "FA84_6":
      imgSrc = FA84_6;
      break;
    case "FA94_3":
      imgSrc = FA94_3;
      break;
    case "FA97_5":
      imgSrc = FA97_5;
      break;
    case "FA102_6":
      imgSrc = FA102_6;
      break;
    case "FA106_3":
      imgSrc = FA106_3;
      break;
    case "FA115_7":
      imgSrc = FA115_7;
      break;
    case "FA118_7":
      imgSrc = FA118_7;
      break;
    case "FA122_3":
      imgSrc = FA122_3;
      break;
    case "FA128_1":
      imgSrc = FA128_1;
      break;
    case "FA128_3":
      imgSrc = FA128_3;
      break;
    case "FA128_7":
      imgSrc = FA128_7;
      break;
    case "FA135_2":
      imgSrc = FA135_2;
      break;
    case "FA135_6":
      imgSrc = FA135_6;
      break;
    case "FA142_3":
      imgSrc = FA142_3;
      break;
    case "FA144_3":
      imgSrc = FA144_3;
      break;
    case "WM1_6":
      imgSrc = WM1_6;
      break;
    case "WM2_3":
      imgSrc = WM2_3;
      break;
    case "WM2_6":
      imgSrc = WM2_6;
      break;
    case "WM3_8":
      imgSrc = WM3_8;
      break;
    case "WM5_1":
      imgSrc = WM5_1;
      break;
    case "WM6_9":
      imgSrc = WM6_9;
      break;
    case "WM11_3":
      imgSrc = WM11_3;
      break;
    case "WM12_8":
      imgSrc = WM12_8;
      break;
    case "WM16_2":
      imgSrc = WM16_2;
      break;
    case "WM17_9":
      imgSrc = WM17_9;
      break;
    case "WM20_8":
      imgSrc = WM20_8;
      break;
    case "WM24_4":
      imgSrc = WM24_4;
      break;
    case "WM28_5":
      imgSrc = WM28_5;
      break;
    case "WM28_7":
      imgSrc = WM28_7;
      break;
    default:
      break;
  }
  return (
    <article key={product.id} className={`${mc.card}`}>
      <h3>{product.name}</h3>
      <div className={`${mc.blocDetail}`}>
        <img loading="lazy" src={imgSrc} alt={product.alt} />
        <div className={`${mc.stats}`}>
          <ul>
            <li>Type : {product.type}</li>
            {/*diff render depending on the 'assistance' value*/}
            <li>AI assistance : {product.assistance ? `yes` : `none`}</li>
            {/*diff render it's a vehicle or another product*/}
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
            {/*those are different renders for different kind of product*/}
            {product.flying ? <li>{`flying`}</li> : ``}
            {product.cockpit ? (
              <li>{`Room in cockpit : ${product.cockpit}`}</li>
            ) : (
              ``
            )}
            {product.weapons ? <li>{`Weaponry : ${product.weapons}`}</li> : ``}
            {product.ammo ? <li>{`Caliber : ${product.ammo}`}</li> : ``}
            {product.magazine ? (
              <li>{`Magazine : ${product.magazine}`}</li>
            ) : (
              ``
            )}
            {product.range ? <li>{`${product.range}`}</li> : ``}
            <li>{product.description}</li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default Card;

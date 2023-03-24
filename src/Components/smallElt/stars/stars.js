import React from "react";
import mc from "./stars.module.scss";
import IcomoonReact from "icomoon-react";
import iconSet from "../../../Styles/icomoon/selection.json";

const Stars = () => {
  return (
    <div className={`${mc.stars}`}>
      <IcomoonReact iconSet={iconSet} color={"#fff"} size={40} icon={"star"} />
      <IcomoonReact iconSet={iconSet} color={"#fff"} size={50} icon={"star"} />
      <IcomoonReact iconSet={iconSet} color={"#fff"} size={40} icon={"star"} />
    </div>
  );
};

export default Stars;

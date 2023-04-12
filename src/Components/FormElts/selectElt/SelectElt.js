import React, { useState } from "react";
import mc from "./selectElt.module.scss";

const SelectElt = ({ onSelect }) => {
  const [selectValue, setSelectValue] = useState("");
  const handleSelect = (e) => {
    e.preventDefault();
    onSelect(selectValue);
  };
  return (
    <div>
      <form onSubmit={handleSelect} className={`${mc.selectForm}`}>
        <select
          name="selectType"
          id="selectType"
          onChange={(e) => {
            setSelectValue(e.target.value);
          }}
          value={selectValue}
          className={`${mc.selectInput}`}
        >
          <option value="select">All products</option>
          <option value="armors">Armors</option>
          <option value="vehicles">Vehicles</option>
          <option value="weapons">Weapons</option>
        </select>
        <button className={`${mc.selectSubmit}`}>Submit</button>
      </form>
    </div>
  );
};

export default SelectElt;

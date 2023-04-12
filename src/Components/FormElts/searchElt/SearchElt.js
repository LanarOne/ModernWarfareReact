import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectProducts } from "../../../Helpers/selectProducts";
import mc from "./searchElt.module.scss";

const SearchElt = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const products = useSelector(selectProducts);
  const handleSearch = async (e) => {
    e.preventDefault();
    const results = await products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
    onSearch(results);
  };
  return (
    <form className={`${mc.submitForm}`} onSubmit={(e) => handleSearch(e)}>
      <input
        type="text"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        value={search}
        placeholder={`Your research here`}
        className={`${mc.searchInput}`}
      />
      <input type="submit" value="search" className={`${mc.submitInput}`} />
    </form>
  );
};

export default SearchElt;

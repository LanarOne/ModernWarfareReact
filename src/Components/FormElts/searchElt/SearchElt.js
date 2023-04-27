import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectProducts } from "../../../Helpers/selectProducts";
import mc from "./searchElt.module.scss";

// the search element that I use to sort the `shop` page through an input
const SearchElt = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  const products = useSelector(selectProducts);
  // I use the useEffect hook to look for any change in the input without running a function in an infinite loop
  // it also is needed so when the input is erased, all the products are displayed again
  useEffect(() => {
    if (search === "") {
      const handleClearInput = () => {
        setSearch("");
        onSearch([]);
      };
      handleClearInput();
    }
  }, [search]);
  // the research function that scans through all data in the `card` element to find any match
  const handleSearch = async (e) => {
    e.preventDefault();
    const results = await products.filter((product) => {
      const cardInfo = `${product.name} ${product.type} ${product.assistance} ${product.price} ${product.flying} ${product.cockpit} ${product.weapons} ${product.ammo} ${product.magazine} ${product.range}`;
      return cardInfo.toLowerCase().includes(search.toLowerCase());
    });
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
    </form>
  );
};

export default SearchElt;

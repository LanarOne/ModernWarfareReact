import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import mc from "./shop.module.scss";
import Stars from "../smallElt/stars/stars";
import SearchElt from "../FormElts/searchElt/SearchElt";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Redux/products.slice";
import Card from "../smallElt/card/card";
import SelectElt from "../FormElts/selectElt/SelectElt";
import Cart from "../smallElt/Cart/Cart";

const Shop = () => {
  // get and dispatch data easily
  const dispatch = useDispatch();
  const { armors, vehicles, weapons } = useSelector((state) => state.products);

  // useState hooks for easier data manipulation
  const [searchResults, setSearchResults] = useState([]);
  const [selected, setSelected] = useState("");

  // token to make sure the user's logged in
  const token = localStorage.getItem("token");

  const handleSearch = (results) => {
    setSearchResults(results);
  };
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  // redirection for the user to log in before accessing the shop
  if (!token) {
    window.location.href = "/signin";
  }
  return (
    <div>
      <Header />
      <main className={`${mc.container}`}>
        <section className={`${mc.searchbar}`}>
          <Stars />
          <h2>Our products</h2>
          <SearchElt onSearch={handleSearch} />
          <SelectElt onSelect={setSelected} />
        </section>
        {/*different render depending on the select input and the searchbar results*/}
        {searchResults.length >= 1 ? (
          <section className={`${mc.searchResults}`}>
            <h2>Search results</h2>
            {searchResults.map((product) => {
              return <Card product={product} key={product.id} />;
            })}
          </section>
        ) : selected === "armors" ? (
          <section className={`${mc.armors}`}>
            <h2>Armors</h2>
            {armors.map((armor) => {
              return <Card product={armor} key={armor.id} />;
            })}
          </section>
        ) : selected === "weapons" ? (
          <section className={`${mc.weapons}`}>
            <h2>Weapons</h2>
            {weapons.map((weapon) => {
              return <Card product={weapon} key={weapon.id} />;
            })}
          </section>
        ) : selected === "vehicles" ? (
          <section className={`${mc.vehicles}`}>
            <h2>Combat Vehicles</h2>
            {vehicles.map((vehicle) => {
              return <Card product={vehicle} key={vehicle.id} />;
            })}
          </section>
        ) : (
          <>
            <section className={`${mc.armors}`}>
              <h2>Armors</h2>
              {armors.map((armor) => {
                return <Card product={armor} key={armor.id} />;
              })}
            </section>
            <section className={`${mc.weapons}`}>
              <h2>Weapons</h2>
              {weapons.map((weapon) => {
                return <Card product={weapon} key={weapon.id} />;
              })}
            </section>
            <section className={`${mc.vehicles}`}>
              <h2>Combat Vehicles</h2>
              {vehicles.map((vehicle) => {
                return <Card product={vehicle} key={vehicle.id} />;
              })}
            </section>
          </>
        )}
      </main>
      <Cart />
      <Footer />
    </div>
  );
};

export default Shop;

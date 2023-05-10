import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../Header/Header";
import { fetchProducts } from "../../../Redux/products.slice";
import AdminCard from "../../smallElt/adminCard/AdminCard";
import mc from "./deleteProduct.module.scss";
import Stars from "../../smallElt/stars/stars";
import SearchElt from "../../FormElts/searchElt/SearchElt";
import SelectElt from "../../FormElts/selectElt/SelectElt";
import Footer from "../../Footer/Footer";

const DeleteProduct = () => {
  // component only for admin use
  const [user, setUser] = useState({});
  const { armors, vehicles, weapons, loading, error } = useSelector(
    (state) => state.products
  );
  const [searchResults, setSearchResults] = useState([]);
  const [selected, setSelected] = useState("");
  const token = localStorage.getItem("token");

  const dispatch = useDispatch();

  // This function is to get the user data in order to define if he or she is an admin
  const getUser = async () => {
    try {
      const response = await fetch("http://localhost:4069/users/getone", {
        headers: {
          Authorization: `${token}`,
        },
      });
      const data = await response.json();
      setUser(data.user);
    } catch (err) {
      return Error(err.message);
    }
  };
  const handleSearch = (results) => {
    setSearchResults(results);
  };
  // The useEffect to run the getUser function once and dispatch the fetchProduct Function
  useEffect(() => {
    getUser();
    dispatch(fetchProducts());
  }, [dispatch]);
  if (user.roleId === 1) {
    window.location.href = "/";
  }
  return (
    <div>
      <Header />
      <main className={`${mc.containerAdmin}`}>
        <section className={`${mc.searchbarAdmin}`}>
          <h2>Our products</h2>
          <SearchElt onSearch={handleSearch} />
          <SelectElt onSelect={setSelected} />
        </section>
        {/*different render depending on the select input and the searchbar results*/}
        {searchResults.length >= 1 ? (
          <section className={`${mc.searchResultsAdmin}`}>
            <h2>Search results</h2>
            {searchResults.map((product) => {
              return <AdminCard product={product} key={product.id} />;
            })}
          </section>
        ) : selected === "armors" ? (
          <section className={`${mc.armorsAdmin}`}>
            <h2>Armors</h2>
            {armors.map((armor) => {
              return <AdminCard product={armor} key={armor.id} />;
            })}
          </section>
        ) : selected === "weapons" ? (
          <section className={`${mc.weaponsAdmin}`}>
            <h2>Weapons</h2>
            {weapons.map((weapon) => {
              return <AdminCard product={weapon} key={weapon.id} />;
            })}
          </section>
        ) : selected === "vehicles" ? (
          <section className={`${mc.vehiclesAdmin}`}>
            <h2>Combat Vehicles</h2>
            {vehicles.map((vehicle) => {
              return <AdminCard product={vehicle} key={vehicle.id} />;
            })}
          </section>
        ) : (
          <>
            <section className={`${mc.armorsAdmin}`}>
              <h2>Armors</h2>
              {armors.map((armor) => {
                return <AdminCard product={armor} key={armor.id} />;
              })}
            </section>
            <section className={`${mc.weaponsAdmin}`}>
              <h2>Weapons</h2>
              {weapons.map((weapon) => {
                return <AdminCard product={weapon} key={weapon.id} />;
              })}
            </section>
            <section className={`${mc.vehiclesAdmin}`}>
              <h2>Combat Vehicles</h2>
              {vehicles.map((vehicle) => {
                return <AdminCard product={vehicle} key={vehicle.id} />;
              })}
            </section>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default DeleteProduct;

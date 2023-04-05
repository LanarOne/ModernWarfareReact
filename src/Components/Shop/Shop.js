import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import mc from "./shop.module.scss";
import Stars from "../smallElt/stars/stars";
import SearchElt from "../FormElts/searchElt/SearchElt";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Redux/products.slice";
import Card from "../smallElt/card/card";

const Shop = () => {
  const dispatch = useDispatch();
  const { armors, vehicles, weapons, loading, error } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  console.log(armors, vehicles, weapons);
  return (
    <div>
      <Header />
      <main className={`${mc.container}`}>
        <section className={`${mc.searchbar}`}>
          <Stars />
          <h2>Our products</h2>
          <SearchElt />
        </section>
        <section className="armors">
          {armors.map((armor) => {
            return <Card product={armor} key={armor.id} />;
          })}
        </section>
        <aside>
          <h2>My shopping cart</h2>
        </aside>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;

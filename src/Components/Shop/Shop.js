import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import mc from "./shop.module.scss";
import Stars from "../smallElt/stars/stars";
import SearchElt from "../FormElts/searchElt/SearchElt";

const Shop = () => {
  return (
    <div>
      <Header />
      <main className={`${mc.container}`}>
        <section className={`${mc.products}`}>
          <Stars />
          <h2>Our products</h2>
          <SearchElt />
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

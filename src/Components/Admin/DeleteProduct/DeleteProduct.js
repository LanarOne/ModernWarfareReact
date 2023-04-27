import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../smallElt/card/card";
import Header from "../../Header/Header";
import { fetchProducts } from "../../../Redux/products.slice";
import AdminCard from "../../smallElt/adminCard/AdminCard";

const DeleteProduct = () => {
  // component only for admin use
  const [user, setUser] = useState({});
  const { armors, vehicles, weapons, loading, error } = useSelector(
    (state) => state.products
  );
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
      <main>
        <section>
          <h2>armors</h2>
          {armors.map((armor) => {
            return <AdminCard product={armor} />;
          })}
        </section>
        <section>
          <h2>vehicles</h2>
          {vehicles.map((vehicle) => {
            return <AdminCard product={vehicle} />;
          })}
        </section>
        <section>
          <h2>weapons</h2>
          {weapons.map((weapon) => {
            return <AdminCard product={weapon} />;
          })}
        </section>
      </main>
    </div>
  );
};

export default DeleteProduct;

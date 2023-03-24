import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import EmailElt from "../FormElts/emailElt/emailElt";
import { useDispatch, useSelector } from "react-redux";
import { getPassword } from "../../Redux/form.slice";
import mc from "./login.module.scss";
import { NavLink } from "react-router-dom";
const Login = () => {
  const { password, email } = useSelector((store) => store.form);
  const dispatch = useDispatch();

  const handlePassword = (e) => {
    dispatch(getPassword(e));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4069/users/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        localStorage.setItem("token", token);
        window.location.href = "/";
      }
    } catch (err) {
      return Error(err.message);
    }
  };
  return (
    <div>
      <Header />
      <main>
        <section className={`${mc.loginForm}`}>
          <h2>Please enter your details</h2>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <EmailElt />
            <div>
              <label htmlFor="password">Enter your password :</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => {
                  handlePassword(e.target.value);
                }}
              />
            </div>
            <input type="submit" value="Submit" />
          </form>
        </section>
        <section className={`${mc.redirect}`}>
          <h2>
            If you are not already, please{" "}
            <NavLink to={"/signup"}>register here</NavLink>
          </h2>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import EmailElt from "../FormElts/emailElt/emailElt";
import PasswordElt from "../FormElts/passwordElt/passwordElt";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import mc from "./signup.module.scss";
import {
  getAdress,
  getCity,
  getDob,
  getLastName,
  getName,
  getUserName,
} from "../../Redux/form.slice";
import iconSet from "../../Styles/icomoon/selection.json";
import IcomoonReact from "icomoon-react";
const SignUp = () => {
  // signUp element to retrieve data from the form filled by the user and send it to the back-end to be stored in the database
  // the useSelector hook is used to get the data from the redux store, while the usedispatch sends data to the store
  const {
    email,
    password,
    confirm,
    username,
    name,
    last_name,
    dob,
    adress,
    city,
  } = useSelector((store) => store.form);
  const dispatch = useDispatch();
  const handleUserName = (e) => {
    dispatch(getUserName(e));
  };
  const handleName = (e) => {
    dispatch(getName(e));
  };
  const handleLastName = (e) => {
    dispatch(getLastName(e));
  };
  const handleDob = (e) => {
    dispatch(getDob(e));
  };
  const handleAdress = (e) => {
    dispatch(getAdress(e));
  };
  const handleCity = (e) => {
    dispatch(getCity(e));
  };

  // the function that handles submitting the form to send it to the NodeJS back-end
  // if the form is correctly filled, the user will be redirected to the homepage
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirm) {
      try {
        const response = await fetch("http://localhost:4069/users/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            username,
            name,
            last_name,
            dob,
            adress,
            city,
          }),
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
    } else {
      alert("confirmation does not match the password");
    }
  };
  // all the inputs are monitored, each time there's a change in the input, the data is stored through the useState hook
  return (
    <div className={`${mc.container}`}>
      <Header />
      <section className={`${mc.signupSection}`}>
        <h2>
          My details
          <IcomoonReact
            iconSet={iconSet}
            color={"#336600"}
            size={35}
            icon="fighter-jet"
          />
        </h2>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <EmailElt />
          <PasswordElt />
          <div>
            <label htmlFor="username">Chose a username :</label>
            <input
              type="text"
              value={username}
              onChange={(e) => {
                handleUserName(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="name">Your official name :</label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                handleName(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="last_name">Your official last name :</label>
            <input
              type="text"
              value={last_name}
              onChange={(e) => {
                handleLastName(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="dob">Your official date of birth :</label>
            <input
              type="date"
              name="dob"
              id="dob"
              value={dob}
              onChange={(e) => {
                handleDob(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="adress">Your official residence adress :</label>
            <input
              type="text"
              value={adress}
              onChange={(e) => {
                handleAdress(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="city">Your city :</label>
            <input
              type="text"
              value={city}
              onChange={(e) => {
                handleCity(e.target.value);
              }}
            />
          </div>
          <input type="submit" />
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default SignUp;

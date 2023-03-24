import React, { useState } from "react";
import { getEmail } from "../../../Redux/form.slice";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../../Redux/store";
import mc from "./emailElt.module.scss";

const EmailElt = (e) => {
  const { email } = useSelector((store) => store.form);

  const dispatch = useDispatch();
  const handleEmail = (e) => {
    dispatch(getEmail(e));
  };
  return (
    <div className={`${mc.emailInput}`}>
      <label htmlFor="email">Your e-mail :</label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={(e) => {
          handleEmail(e.target.value);
        }}
      />
    </div>
  );
};

export default EmailElt;

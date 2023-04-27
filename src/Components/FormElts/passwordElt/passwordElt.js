import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getConfirm, getPassword } from "../../../Redux/form.slice";
import mc from "./passwordElt.module.scss";

const PasswordElt = () => {
  // the password element that dispatch the value of the input
  const dispatch = useDispatch();
  const { password, confirm } = useSelector((store) => store.form);
  const handlePassChange = (e) => {
    dispatch(getPassword(e));
  };

  const handleConfirmChange = (e) => {
    dispatch(getConfirm(e));
  };
  return (
    <div className={`${mc.passwordInput}`}>
      <div>
        <label htmlFor="password">Choose a password :</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            handlePassChange(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="confirm">Confirm your password :</label>
        <input
          type="password"
          name="confirm"
          value={confirm}
          onChange={(e) => {
            handleConfirmChange(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default PasswordElt;

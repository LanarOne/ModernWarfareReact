import React from "react";
import mc from "./modale.module.scss";
const Modale = ({ message, onConfirm, onCancel }) => {
  return (
    <>
      <div className={`${mc.overlay}`} onClick={onCancel}></div>
      <article className={`${mc.modale}`}>
        <h3>{message}</h3>
        <div className={`${mc.buttons}`}>
          <button onClick={onConfirm}>Confirm</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </article>
    </>
  );
};

export default Modale;

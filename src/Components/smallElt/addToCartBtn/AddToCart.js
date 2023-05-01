import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../Redux/cart.slice";
import mc from "./addToCart.module.scss";

const AddToCart = ({ product }) => {
  const products = useSelector((state) => state.cart.products);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <button
      className={`${mc.addToCartBtn}`}
      onClick={() => handleAddToCart(product)}
    >
      Add To Cart
    </button>
  );
};

export default AddToCart;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import mc from "./cart.module.scss";
import iconSet from "../../../Styles/icomoon/selection.json";
import IcomoonReact from "icomoon-react";
import { clearCart, removeFromCart } from "../../../Redux/cart.slice";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();
  const handleDelete = (product) => {
    const productId = product.id;
    dispatch(removeFromCart(productId));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <aside className={`${mc.aside}`}>
      <div className={`${mc.content}`}>
        <h2>my cart</h2>
        {products.map((product) => {
          let totalPrice = product.price * product.quantity;
          return (
            <ul>
              <li>
                {product.quantity}x{product.name}
              </li>
              <li>
                {totalPrice}
                <IcomoonReact
                  iconSet={iconSet}
                  color={"#ff6600"}
                  size={15}
                  icon="bitcoin"
                />
                <button onClick={() => handleDelete(product)}>x</button>
              </li>
            </ul>
          );
        })}
        {total ? (
          <p>
            Total : {total}
            <IcomoonReact
              iconSet={iconSet}
              color={"#ff6600"}
              size={20}
              icon="bitcoin"
            />
            <button onClick={handleClearCart}>x</button>
          </p>
        ) : (
          `Your cart is empty`
        )}
      </div>
    </aside>
  );
};

export default Cart;

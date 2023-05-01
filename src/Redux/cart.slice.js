import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    total: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingProduct = state.products.find(
        (prod) => prod.id === product.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({ ...product, quantity: 1 });
      }
      state.total += product.price;
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      const product = state.products.find((prod) => prod.id === productId);
      if (product) {
        if (product.quantity > 1) {
          product.quantity -= 1;
        } else {
          state.products = state.products.filter(
            (prod) => prod.id !== productId
          );
        }
        state.total -= product.price;
      }
    },
    clearCart: (state) => {
      state.products = [];
      state.total = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = CartSlice.actions;
export default CartSlice.reducer;

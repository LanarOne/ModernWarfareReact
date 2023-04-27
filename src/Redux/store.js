import { configureStore } from "@reduxjs/toolkit";
import { formSlice } from "./form.slice";
import { productSlice } from "./products.slice";
import { CartSlice } from "./cart.slice";

export const store = configureStore({
  reducer: {
    form: formSlice.reducer,
    products: productSlice.reducer,
    cart: CartSlice.reducer,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import { formSlice } from "./form.slice";
import { productSlice } from "./products.slice";

export const store = configureStore({
  reducer: {
    form: formSlice.reducer,
    products: productSlice.reducer,
  },
});

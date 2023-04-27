import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    setNewItem: (state, action) => {
      return { ...state, products: [...state.products, action.payload] };
    },
  },
});

export const { setNewItem } = CartSlice.actions;
export default CartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../Helpers/sort";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    armors: [],
    vehicles: [],
    weapons: [],
    error: null,
    loading: false,
  },
  reducers: {
    setProducts: (state, action) => {
      state.armors = action.payload.armors;
      state.vehicles = action.payload.vehicles;
      state.weapons = action.payload.weapons;
      state.loading = false;
      state.error = null;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setProductsLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
  },
});

export const { setProducts, setError, setProductsLoading } =
  productSlice.actions;
export const fetchProducts = () => async (dispatch) => {
  try {
    dispatch(setProductsLoading());
    const { armors, vehicles, weapons, products } = await getProducts();
    dispatch(setProducts({ armors, vehicles, weapons }));
  } catch (error) {
    dispatch(setError(error.message));
  }
};
export default productSlice.reducer;

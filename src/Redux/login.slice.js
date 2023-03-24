import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "loginBtn",
  initialState: {
    visible: true,
  },
  reducers: {
    toggleLoginBtn: (state) => {
      return { ...state, visible: !state.visible };
    },
  },
});

export const { toggleLoginBtn } = loginSlice.actions;
export default loginSlice.reducer;

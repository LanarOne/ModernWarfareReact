import { createSlice } from "@reduxjs/toolkit";
import { isValidDateValue } from "@testing-library/user-event/dist/utils";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    email: "",
    password: "",
    confirm: "",
    username: "",
    name: "",
    last_name: "",
    dob: "",
    adress: "",
    city: "",
  },
  reducers: {
    getEmail: (state, action) => {
      return { ...state, email: action.payload };
    },
    getPassword: (state, action) => {
      return { ...state, password: action.payload };
    },
    getConfirm: (state, action) => {
      return { ...state, confirm: action.payload };
    },
    getUserName: (state, action) => {
      return { ...state, username: action.payload };
    },
    getName: (state, action) => {
      return { ...state, name: action.payload };
    },
    getLastName: (state, action) => {
      return { ...state, last_name: action.payload };
    },
    getDob: (state, action) => {
      return { ...state, dob: action.payload };
    },
    getAdress: (state, action) => {
      return { ...state, adress: action.payload };
    },
    getCity: (state, action) => {
      return { ...state, city: action.payload };
    },
  },
});

export const {
  getEmail,
  getConfirm,
  getPassword,
  getAdress,
  getUserName,
  getName,
  getLastName,
  getCity,
  getDob,
} = formSlice.actions;
export default formSlice.reducer;

import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.scss";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import Home from "./Components/HomePage/Home";
import About from "./Components/About/About";
import Shop from "./Components/Shop/Shop";
import SignUp from "./Components/SignUp/SignUp";
import Login from "./Components/Login/Login";
import DeleteProduct from "./Components/Admin/DeleteProduct/DeleteProduct";
import UpdateProduct from "./Components/Admin/UpdateProduct/UpdateProduct";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/shop"} element={<Shop />} />
          <Route path={"/signup"} element={<SignUp />} />
          <Route path={"/signin"} element={<Login />} />
          <Route path={"/admin/deleteproduct"} element={<DeleteProduct />} />
          <Route path={"/admin/updateproduct"} element={<UpdateProduct />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

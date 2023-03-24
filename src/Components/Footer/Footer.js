import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../img/logo.png";
import mc from "./footer.module.scss";
import iconSet from "../../Styles/icomoon/selection.json";
import IcomoonReact from "icomoon-react";

const Footer = () => {
  const token = localStorage.getItem("token");
  return (
    <footer>
      <div className={`${mc.container}`}>
        <img src={logo} alt="" />
        <nav>
          <ul>
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) => (isActive ? "inactive" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={({ isActive }) => (isActive ? "inactive" : "")}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/shop"}
                className={({ isActive }) => (isActive ? "inactive" : "")}
              >
                Shop
              </NavLink>
            </li>
            <li>
              {!token ? (
                <NavLink
                  to={"/signin"}
                  className={({ isActive }) => (isActive ? "inactive" : "")}
                >
                  Log-in
                </NavLink>
              ) : (
                ""
              )}
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

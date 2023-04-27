import React, { useEffect, useState } from "react";
import rightWing from "../../public/img/rightWing.png";
import leftWing from "../../public/img/leftWing.png";
import logo from "../../public/img/logo.png";
import mc from "./header.module.scss";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import iconSet from "../../Styles/icomoon/selection.json";
import IcomoonReact from "icomoon-react";

const Header = () => {
  // token and user data to display username in the nav of the header
  const token = localStorage.getItem("token");
  const [user, setUser] = useState({});

  // for media queries
  const isSmallScreen = useMediaQuery({ query: "(max-width: 450px)" });
  const isMediumScreen = useMediaQuery({
    query: "(min-width:451px) and (max-width: 770px)",
  });
  const isLargeScreen = useMediaQuery({ query: "(min-width: 771px)" });
  const [isBurgerOpen, setIsBurgerOpen] = useState(true);

  // the getUser function to fetch the user data
  const getUser = async () => {
    try {
      const response = await fetch("http://localhost:4069/users/getone", {
        headers: {
          Authorization: `${token}`,
        },
      });
      const data = await response.json();
      setUser(data.user);
    } catch (err) {
      return Error(err.message);
    }
  };

  // simple log-out function that empties the `token`from localstorage
  const handleLogOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };
  useEffect(() => {
    getUser();
  }, []);
  return (
    <header>
      {/*media query for mobile responsive*/}
      {isSmallScreen && (
        <div className={`${mc.container}`}>
          <div className={`${mc.bloclogo}`}>
            <img src={logo} alt="" />
          </div>
          {/*`burger` button to unfold the nav*/}
          <button onClick={() => setIsBurgerOpen(!isBurgerOpen)}>
            <IcomoonReact
              iconSet={iconSet}
              color={"#ff6600"}
              size={20}
              icon="space-shuttle"
            />
            Menu
          </button>
          <ul className={isBurgerOpen ? `${mc.displayNone}` : ""}>
            {/*conditional render to display which page the user is on*/}
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/shop"}
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                Shop
              </NavLink>
            </li>
            <li>
              {!token ? (
                <NavLink
                  to={"/signin"}
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  Log-in
                </NavLink>
              ) : (
                <div className={`${mc.custom}`}>
                  <p>Bienvenue {user.username}</p>
                  <button onClick={handleLogOut}>Log out</button>
                </div>
              )}
            </li>
          </ul>
        </div>
      )}
      {/*media query for tablets and small screens responsive*/}
      {isMediumScreen && (
        <div className={`${mc.container}`}>
          <div className={`${mc.bloclogo}`}>
            <img src={logo} alt="" />
          </div>
          <ul>
            {/*conditional render to display which page the user is on*/}
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/shop"}
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                Shop
              </NavLink>
            </li>
            <li>
              {!token ? (
                <NavLink
                  to={"/signin"}
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  Log-in
                </NavLink>
              ) : (
                <div className={`${mc.custom}`}>
                  <p>Bienvenue {user.username}</p>
                  <button onClick={handleLogOut}>Log out</button>
                </div>
              )}
            </li>
          </ul>
        </div>
      )}
      {/*media query for desktop*/}
      {isLargeScreen && (
        <div className={`${mc.container}`}>
          <div className={`${mc.bloclogo}`}>
            <img
              src={rightWing}
              alt="logo of a right wing, generated by MidJourney (https://midjourney.com/home/?callbackUrl=%2Fapp%2F)"
            />
            <h1>Future Warfare Corporation</h1>
            <img
              src={leftWing}
              alt="logo of a left wing, generated by MidJourney (https://midjourney.com/home/?callbackUrl=%2Fapp%2F)"
            />
          </div>
          <nav>
            <ul>
              {/*conditional render to display which page the user is on*/}
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/about"}
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/shop"}
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  Shop
                </NavLink>
              </li>
              <li>
                {!token ? (
                  <NavLink
                    to={"/signin"}
                    className={({ isActive }) =>
                      isActive ? "active" : "inactive"
                    }
                  >
                    Log-in
                  </NavLink>
                ) : (
                  <div className={`${mc.custom}`}>
                    <p>Bienvenue {user.username}</p>
                    <button onClick={handleLogOut}>Log out</button>
                  </div>
                )}
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

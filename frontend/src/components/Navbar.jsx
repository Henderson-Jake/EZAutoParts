import React, { useRef, useState } from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Searchbar from "./Searchbar";
import axios from 'axios';
import "../styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoginSuccess, setIsLoginSuccess] = useState(true); // Track login success
  const [error, setError] = useState(''); // This is to track login error
  const [navOpen, setNavOpen] = useState(false);
  

  // useref to get drop down content and toggle it
  const menuRef = useRef();

  // useref to get navbar
  const navbarRef = useRef();

  // nav open and close
  const handleNavbar = () => {
    navbarRef.current.classList.toggle("nav-main");
    setNavOpen(!navOpen);
  };

  const handleclosenav = (e) => {
    if(menuIsOpen) dropdown_toggle();
  };

  // nav menu drop down
  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("menu-active");
    setMenuIsOpen(!menuIsOpen);
  };

  const handleMenuItems = (e) => {
    if(menuIsOpen) dropdown_toggle();
  };

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
    // setIsMenuOpen(false);
  };

  const handleSearch = (query) => {
    // Handle search functionality here
    console.log("Search query:", query);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/users/login', {
        email: e.target.username.value,
        password: e.target.password.value
      });

      // When authentication is successful
      if (response.status === 200) {
        setIsLoginSuccess(true);
        // Perform login actions right hhere (such as redirect, store user info in state, etc...)
        alert('Authentication successful!');
      }
    } catch (error) {
      // Handles any authentication error
      setIsLoginSuccess(false);
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError('Internal server error');
      }
    }
  };

  return (
    <div className={`navbar ${navOpen ? "nav-open" : ""}`}>
      <div className="leftSide">
        <Link onClick={handleclosenav} style={{ textDecoration: "none" }} to="/">
          <img src={Logo} alt="Logo"  />
        </Link>

        <div className="hamburger" onClick={handleNavbar}>
          <FontAwesomeIcon className="bar-icon" icon={faBars} />
        </div>
      </div>

      <div className="nav-main">
        <div className="navLinks" ref={navbarRef}>
          <div className="menu">
            <button className="menubtn " onClick={dropdown_toggle}>
              <p>Menu</p>
              <FontAwesomeIcon
                className={`drop-down ${menuIsOpen ? "open" : ""}`}
                icon={faCaretDown}
              />
            </button>
            {/* {isMenuOpen && ( */}
            <div ref={menuRef} className="menu-content menu-active">
              <Link
                style={{ textDecoration: "none" }}
                to="/body-parts/alternators"
                onClick={handleMenuItems}
              >
                <p>Alternators</p>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                to="/body-parts/batteries"
                onClick={handleMenuItems}
              >
                <p>Battery</p>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                to="/body-parts/filters"
                onClick={handleMenuItems}
              >
                <p>Filters</p>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                to="/body-parts/Headlight-bulbs"
                onClick={handleMenuItems}
              >
                <p>Headlights</p>
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                to="/body-parts/spark-plugs"
                onClick={handleMenuItems}
              >
                <p>Spark Plugs</p>
              </Link>
            </div>
            {/* )} */}
          </div>
          <Link
            onClick={handleclosenav}
            style={{ textDecoration: "none" }}
            to="/About"
          >
            <p  className="about">About</p>
          </Link>
          <Link
            onClick={handleclosenav}
            style={{ textDecoration: "none" }}
            to="/Contact"
          >
            <p  className="contact">Contact</p>
          </Link>
        </div>

        <div className="rightSide">
          <Searchbar onSearch={handleSearch} />{" "}
          {/* Include the SearchBar component */}
          <Link
            onClick={handleclosenav}
            style={{ textDecoration: "none" }}
            to="/Cart"
            className="iconButton"
          >
            <AddShoppingCartIcon style={{ color: "white", fontSize: 35 }} />
          </Link>
          <div className="loginlink" style={{ position: "relative" }}>
            <button className="login-button" onClick={toggleLogin}>
              Login
            </button>
            <div
              className="login-dropdown"
              style={{
                display: isLoginOpen ? "block" : "none",
                position: "absolute",
                top: "100%",
                right: 0,
              }}
            >
              <div
                className="login-dropdown"
                style={{
                  display: isLoginOpen ? "block" : "none",
                  position: "absolute",
                  fontFamily: "Arial",
                  top: "100%",
                  right: 0,
                  backgroundColor: "#f4f4f4",
                  padding: "20px",
                  borderRadius: "4px",
                  boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.5)",
                }}
              >
                {/* Login form */}
                <form onSubmit={handleSubmit}>
                  <label htmlFor="username">Email:</label>
                  <input type="text" id="username" name="username" />
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" name="password" />
                  <button className="submit-login" type="submit">
                    Login
                  </button>
                </form>
                {!isLoginSuccess && (
                  <div className="invalid-credentials">Invalid credentials</div>
                )}
                <div className="register-link">
                  Don't have an account?{" "}
                  <Link style={{ textDecoration: "none" }} to="/register">
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

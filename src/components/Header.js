import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/contants";

const Header = () => {
  const [buttonName, setbuttonName] = useState("Login");

  const changeButtonName = () => {
    if (buttonName == "Login") setbuttonName("Logout");
    else setbuttonName("Login");
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>
            <Link to="/about">About us</Link> </li> 
          <li>
            <Link to="/contact">Contact us</Link></li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              changeButtonName();
            }}
          >
            {buttonName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;

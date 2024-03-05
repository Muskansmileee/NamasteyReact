import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/contants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [buttonName, setbuttonName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);

  const changeButtonName = () => {
    if (buttonName == "Login") setbuttonName("Logout");
    else setbuttonName("Login");
  };

  const cartItems = useSelector((store) => {    //ye h appStore 
    return store.cart.items;                    // appStore ka cart ka item , this cart name is what writeen in appStore.
  })                                            //subscribing small portion of store.
  console.log(cartItems);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li> Online Status: {onlineStatus ?  "✅" : "🔴" } </li>
          <li><Link to="/">Home</Link></li>
          <li>
            <Link to="/about">About us</Link> </li> 
          <li>
            <Link to="/contact">Contact us</Link></li>
            <li>
            <Link to="/grocery">Grocery</Link></li>

          <li>
            <Link to="/cart"  className="login">
              Cart ({cartItems.length} items)
            </Link></li>

          <button
            className="login"
            onClick={() => {
              changeButtonName();
            }}
          >
            {buttonName}
          </button>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

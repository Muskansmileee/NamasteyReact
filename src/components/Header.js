import { useState } from "react";
import { LOGO_URL } from "../utils/contants";

const Header = () => {
    const [ buttonName, setbuttonName ] = useState('Login');

    const changeButtonName = () => {
        if(buttonName == "Login")
        setbuttonName('Logout');
        else
        setbuttonName('Login')               
    }

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" 
                src = {LOGO_URL} />
            </div>
            <div className="nav-items">
               <ul>
                  <li>Home</li>
                  <li>About us</li>
                  <li>Contact us</li>
                  <li>Cart</li>
                  <button className="login"
                    onClick = {() => {
                        changeButtonName();
                    }}
                  >{ buttonName }</button>
               </ul>
            </div>
        </div>
    )
}

export default Header;
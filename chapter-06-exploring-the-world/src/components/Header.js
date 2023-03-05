import logo from "../../images/logo.png";
import cart from "../../images/cart.png";
import { useEffect, useState } from "react";

const Header = () => {
  const [isLoggedIn, setIsLoggedin] = useState(false);
  useEffect(() => {
    console.log("this is getting rendered");
  }, [isLoggedIn]);
  return (
    <>
      <div className="nav">
        <div className="logo">
          <img src={logo} alt="logo" className="icon" />
          Swiggy it
        </div>
        <ul className="list-style">
          <li>home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div>
          {isLoggedIn ? (<button onClick={() => setIsLoggedin(false)}>Logout</button>) : (<button  onClick={() => setIsLoggedin(true)}>Login</button>)}

          <img src={cart} alt="cart" className="icon" />
        </div>
      </div>
    </>
  );
};

export default Header;

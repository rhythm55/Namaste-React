import logo from "../../images/logo.png";
import cart from "../../images/cart.png";

const Header = () => (
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
      <img src={cart} alt="cart" className="icon" />
    </div>
  </>
);

export default Header;

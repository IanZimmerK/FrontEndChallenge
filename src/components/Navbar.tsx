import { FiChevronDown, FiShoppingCart, FiUser } from 'react-icons/fi';
import "./styles/Navbar.css";

// Top navigation bar with logo, menu links, currency switcher, cart and sign-in
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* Logo and menu links */}
        <img src="/chicks-logo-large-hovered.svg" alt="Chicks Gold" className="navbar-logo" />
        <div className="navbar-divider" />
        <div className="navbar-links">
          {['CURRENCY', 'ITEMS', 'ACCOUNTS', 'SERVICES', 'MORE', 'SELL'].map((item, idx) => (
            <a key={idx} href="#">
              <span>{item}</span>
              <FiChevronDown className="chevron-icon" />
            </a>
          ))}
        </div>
      </div>
      <div className="navbar-right">
        {/* Currency selector, cart, sign in */}
        <a href="#" className="navbar-usd">
          <span>USD</span>
          <FiChevronDown className="chevron-icon" />
        </a>
        <a href="#" className="navbar-cart">
          <FiShoppingCart className="icon" />
          <span>CART (5)</span>
        </a>
        <div className="signin-wrapper">
          <button className="signin-btn">
            <span>SIGN IN</span>
            <FiUser className="icon" />
          </button>
        </div>
      </div>
    </nav>
  );
}
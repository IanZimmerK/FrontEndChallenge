import { FiChevronDown, FiShoppingCart, FiUser } from 'react-icons/fi';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/chicks-logo-large-hovered.svg" alt="Chicks Gold" className="navbar-logo" />
        <div className="navbar-divider" />
        <div className="navbar-links">
          {['Currency', 'Items', 'Accounts', 'Services', 'More', 'Sell'].map((item, idx) => (
            <a key={idx} href="#">
              <span>{item}</span>
              <FiChevronDown className="chevron-icon" />
            </a>
          ))}
        </div>
      </div>
      <div className="navbar-right">
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
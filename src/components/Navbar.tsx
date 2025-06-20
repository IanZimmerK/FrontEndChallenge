import { useState } from 'react';
import { FiChevronDown, FiShoppingCart, FiUser, FiMenu, FiX } from 'react-icons/fi';
import "./styles/Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/chicks-logo-large-hovered.svg" alt="Chicks Gold" className="navbar-logo" />
        <div className="navbar-divider" />

        {/* Toggle button visible on small screens */}
        <button className="navbar-toggle" onClick={() => setMenuOpen(prev => !prev)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
          {['CURRENCY', 'ITEMS', 'ACCOUNTS', 'SERVICES', 'MORE', 'SELL'].map((item, idx) => (
            <a key={idx} href="#">
              <span>{item}</span>
              <FiChevronDown className="chevron-icon" />
            </a>
          ))}
        </div>
      </div>

      <div className={`navbar-right ${menuOpen ? "open" : ""}`}>
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

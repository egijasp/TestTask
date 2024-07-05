import "./Header.scss";
import { useState } from "react";
import logo from "../../assets/logo2.png";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="header">
      <div className="container row">
        <button
          className="nav-toggle"
          aria-label="open navigation"
          onClick={toggleMenu}
        >
          <span className="hamburger"></span>
        </button>
        <div>
          <Logo src={logo} alt="logo" />
        </div>
        <nav className={`nav ${isOpen ? "nav--visible" : ""}`}>
          <ul className="nav_list">
            <li className="nav_links">
              <Link to="/table">Table</Link>
            </li>
            <li className="nav_links">
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

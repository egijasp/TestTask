import "./Header.scss";
import { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container header__row">
        <div className="header__content">
          <Logo src={logo} alt="logo" />
          <button
            className="header__nav-toggle"
            aria-label="open navigation"
            onClick={toggleMenu}
          >
            <span className="header__hamburger-menu"></span>
          </button>
        </div>
        <nav className={`header__nav ${isOpen ? "header__nav--visible" : ""}`}>
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <Link
                className="header__nav-link"
                to="/"
                onClick={() => setIsOpen(false)}
              >
                Table
              </Link>
            </li>
            <li className="header__nav-item">
              <Link
                className="header__nav-link"
                to="/about"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

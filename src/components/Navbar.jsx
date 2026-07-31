import "../styles/Navbar.css";
import logo from "../assets/images/logo.png";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <img src={logo} alt="Imperial Beverages" />
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#clients">Clients</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <button className="contact-btn">
        Get in Touch
      </button>

    </nav>
  );
}

export default Navbar;
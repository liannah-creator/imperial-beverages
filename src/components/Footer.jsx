import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      {/* Large Background Text */}
      <div className="footer-watermark">
        IBL
      </div>

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">

          <span className="footer-logo">
            IBL
          </span>

          <h2>
            Imperial Beverages
          </h2>

          <p className="footer-tagline">
            Refreshing Nigeria.<br />
            Reaching the world.
          </p>

        </div>


        {/* EXPLORE */}
        <div className="footer-column">

          <h3>Explore</h3>

          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#products">Products</a>
          <a href="#clients">Clients</a>
          <a href="#contact">Contact</a>

        </div>


        {/* CONTACT */}
        <div className="footer-column">

          <h3>Contact</h3>

          <a href="mailto:info@imperial-beverages.com">
            info@imperial-beverages.com
          </a>

          <a href="tel:+2349166686666">
            +234 916 668 6666
          </a>

          <p>
            88/90 Airport Road,<br />
            Mafoluku, Oshodi,<br />
            Lagos, Nigeria.
          </p>

        </div>


        {/* CONNECT */}
        <div className="footer-column">

          <h3>Connect</h3>

          <a href="#" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>

          <a href="#" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>

          <a href="#" target="_blank" rel="noopener noreferrer">
            YouTube
          </a>

        </div>

      </div>


      {/* CTA */}

      <div className="footer-cta">

        <p>
          Have a project or partnership in mind?
        </p>

        <a href="mailto:info@imperial-beverages.com">
          LET'S TALK <span>→</span>
        </a>

      </div>


      {/* BOTTOM */}

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Imperial Beverages Limited.
        </p>

        <p>
          All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;
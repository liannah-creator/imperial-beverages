import "../styles/About.css";
import aboutBg from "../assets/about-bg.jpeg";
function About() {
  return (
            <section className="about" id="about" style={{ backgroundImage: `url(${aboutBg})` }}>
            <div className="about-overlay">
            <div className="about-content-wrapper">
    

      {/* Section Heading */}

      <div className="about-header">

        <p className="section-tag">
          WHO WE ARE
        </p>

        <h2>
          About Imperial Beverages
        </h2>

      </div>

      {/* Company Introduction */}

    <div className="about-content">

        <p className="about-text">

         Founded in 2019, Imperial Beverages Limited is a beverage canning company established in Lagos, Nigeria. After noticing an absence in
         the Nigerian market of premium, high quality flavored beverages, IBL came to life, founding three well-loved brands in the market: Tomi
         Imperial Crown, and the latest addition Black Stallion Energy Drink. IBL proudly offers copacking services for well
         established brands in Nigeria and internationally, further creating a strong presence in the market as a beverages canning partner. 

          <br /><br />
            Our products are in the non-alcoholic range. Tomi is available in 5 refreshing and bubbly flavours, and Imperial
            Crown is a sparkling grape drink enjoyed across the country as a non-alcoholic wine. Black Stallion
            is a high quality 100% local energy drink enjoyed by many.
          <br /><br />
          Every bottle reflects our commitment to consistency, trust and
          world-class production, making Imperial Beverages a brand people
          can rely on.

        </p>

      
        <div className="capacity-gauge">

    <div className="gauge-ring">

        <div className="gauge-center">

            <span className="gauge-label">
                CAPACITY
            </span>

            <h2>10,890</h2>

            <p>L/hr</p>

        </div>

        <div className="tick t1"></div>
        <div className="tick t2"></div>
        <div className="tick t3"></div>
        <div className="tick t4"></div>
        <div className="tick t5"></div>

        {/* <div className="needle"></div> */}

        {/* <div className="hub"></div> */}

     </div>

</div>
    </div>

      {/* Mission, Vision & Core Values */}

      <div className="mvv-section">

        <div className="mvv-card">

          <h3>Our Mission</h3>

          <p>
            To exceed our customers’ expectations
            in the quality of our beverages, in our
            services, dedication, and in the belief
            that we will always improve upon what
            we do to be the best in the industry
          </p>

        </div>

        <div className="mvv-card">

          <h3>Our Vision</h3>

          <p>
                To be the leading beverage producers
                and distributors across Nigeria of high
                quality canned beverages.
          </p>

        </div>

        <div className="mvv-card">

          <h3>Our Core Values</h3>

          <ul>

            <li>Highest Quality Products</li>

            <li>Flexibility and Adaptability</li>

            <li>Creating a challenging and safe workplace environment</li>

            <li>Customer Satisfaction</li>

            <li>Teamwork</li>

            <li>Safety and Hygeine</li>

          </ul>

        </div>

      </div>
    </div>
    </div>
    </section>
  );
}

export default About;
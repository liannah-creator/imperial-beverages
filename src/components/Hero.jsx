import "../styles/Hero.css";
import heroVideo from "../assets/videos/hero-video.mp4";

function Hero() {
  return (
    <section className="hero">

      <video className="hero-video" autoPlay muted loop playsInline>
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <h1>IMPERIAL BEVERAGES</h1>
         <p className="hero-est">
          Established • 2019
        </p>
        <h2>
          Refreshing Lives,One Bottle at a Time

        </h2>

        <div className="social-links">
            <a href="https://www.instagram.com/tomi.juice"
             target="_blank">Tomi</a>
            <span>•</span>

            <a href="https://instagram.com/imperialcrown"
            target="_blank">Imperial Crown</a>
            <span>•</span>

            <a href="https://instagram.com/blackstallion"
             target="_blank">Black Stallion</a>
         </div>


        <div className="hero-buttons">

          {/* <button className="primary-btn">
            Explore Products
          </button>

          <button className="secondary-btn">
            Our Story
          </button> */}

        </div>

        {/* <div className="scroll">
          ↓ Scroll
        </div> */}

      </div>

    </section>
  );
}

export default Hero;
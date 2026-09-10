import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/Products.css";

import productVideo from "../assets/videos/products-video.mp4";
import tomiApple from "../assets/images/tomi-apple.png";
import tomiOrange from "../assets/images/tomi-orange.png";
import tomiMango from "../assets/images/tomi-mango.png";
import tomiCranberry from "../assets/images/tomi-cranberry.png";
import crown from "../assets/images/crown.png";
import stallion from "../assets/images/stallion.png";

const tomiFlavours = [
  { name: "Apple",  image: tomiApple },
  { name: "Orange", image: tomiOrange },
  { name: "Mango", image: tomiMango },
  { name: "Cranberry", image: tomiCranberry },
];

const products = [
  {
    id: "tomi",
    title: "It's Tomi Time!",
    description:
      "Packed with rich fruit flavours and sparkling refreshment, Tomi is the perfect companion for every moment.",
    image: tomiApple,
    alt: "Tomi Apple drink bottle",
    flavours: tomiFlavours,
  },
  {
    id: "crown",
    title: "Imperial Crown",
    description:
      "A premium sparkling grape drink created for celebrations, family gatherings and memorable occasions. Elegant, refreshing and completely non-alcoholic.",
    image: crown,
    alt: "Imperial Crown bottle",
  },
  {
    id: "stallion",
    title: "Black Stallion",
    description:
      "Built for champions, Black Stallion combines great taste with dependable energy, keeping you refreshed throughout the day.",
    image: stallion,
    alt: "Black Stallion can",
  },
];

const slideVariants = {
  enter: (direction) => ({ opacity: 0, x: direction > 0 ? 110 : -110 }),
  center: { opacity: 1, x: 0 },
  exit: (direction) => ({ opacity: 0, x: direction > 0 ? -110 : 110 }),
};

function Products() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [currentFlavour, setCurrentFlavour] = useState(0);
  const currentProduct = products[currentIndex];
  const displayedImage = currentProduct.flavours
    ? currentProduct.flavours[currentFlavour].image
    : currentProduct.image;

  const changeProduct = (step) => {
    setDirection(step);
    setCurrentIndex((index) => (index + step + products.length) % products.length);
    setCurrentFlavour(0);
  };

  return (
    <section className="products" id="products">
      <video className="products-video" autoPlay muted loop playsInline>
        <source src={productVideo} type="video/mp4" />
      </video>
      <div className="products-overlay" />

      <div className="products-content">
        <div className="products-heading">
          <p className="section-tag">OUR PRODUCTS</p>
          <h2>IBL Products</h2>
          <p>Premium Nigerian refreshments, made for every moment.</p>
        </div>

        <div className="product-slider" aria-label="Imperial Beverages products">
          <button
            className="showcase-arrow showcase-arrow-left"
            type="button"
            onClick={() => changeProduct(-1)}
            aria-label="Previous product"
          >
            ‹
          </button>

          <div className="product-slider-window">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.article
                key={currentProduct.id}
                className="product-showcase"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.div
                  className="product-info"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12, duration: 0.38 }}
                >
                  <p className="product-kicker">{currentProduct.id}</p>
                  <h3>{currentProduct.title}</h3>
                  <p>{currentProduct.description}</p>

                  {currentProduct.flavours && (
                    <div className="flavour-list" aria-label="Choose a Tomi flavour">
                      {currentProduct.flavours.map((flavour, index) => (
                        <button
                          key={flavour.name}
                          type="button"
                          className={`flavour ${currentFlavour === index ? "active" : ""}`}
                          onClick={() => setCurrentFlavour(index)}
                        >
                          <span aria-hidden="true">{flavour.emoji}</span> {flavour.name}
                        </button>
                      ))}
                    </div>
                  )}
                </motion.div>

                <motion.div
                  className="product-image-side"
                  initial={{ opacity: 0, scale: 0.93, x: 28 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.45 }}
                >
                  <img className="product-image" src={displayedImage} alt={currentProduct.alt} />
                </motion.div>
              </motion.article>
            </AnimatePresence>
          </div>

          <button
            className="showcase-arrow showcase-arrow-right"
            type="button"
            onClick={() => changeProduct(1)}
            aria-label="Next product"
          >
            ›
          </button>
        </div>

        <div className="slider-dots" aria-label="Current product">
          {products.map((product, index) => (
            <span key={product.id} className={index === currentIndex ? "active" : ""} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;

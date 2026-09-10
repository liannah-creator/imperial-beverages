import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "..//components/About";
import Clients from "../components/Clients";
import Products from "../components/Products";
import Contact from "../components/Contact";
import Location from "../components/Location";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Clients/>
      <Products/>
      <Contact/>
      <Location/>
      <Footer/>
    </>
  );
}

export default Home;
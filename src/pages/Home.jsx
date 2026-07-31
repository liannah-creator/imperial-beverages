import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "..//components/About";
import Clients from "../components/Clients";
import Products from "../components/Products";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Clients/>
      <Products/>
      <Contact/>
    </>
  );
}

export default Home;
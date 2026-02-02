import "./index.css";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import HowItWorks from "./components/HowItWorks";
import SupportedDevices from "./components/SupportedDevice";
import { Products } from "./components/Products";
import Location from "./components/Location";
import FinalCTA from "./components/FinalCTA";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-white scroll-smooth">
      <Header />

      <main className="pt-16">
        <div id="hero">
          <Hero />
        </div>

        <SupportedDevices />

        <HowItWorks />

        <div id="why-choose-us">
          <WhyChooseUs />
        </div>

        <div id="products">
          <Products />
        </div>

        <div id="testimonials">
          <Testimonials />
        </div>

        <div id="location">
          <Location />
        </div>

        <FinalCTA />
      </main>

      <Footer />

      <ScrollToTop />
    </div>
  );
}

export default App;